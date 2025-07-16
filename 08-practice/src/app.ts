//
enum Status{
    ACTIVE,
    FINISHED
}
// project type
class Project {
    constructor(
        public id:string,
        public title:string,
        public description:string,
        public people:number,
        public status: Status
    ) {

    }

}


// Project State Management
type Listener=(items:Project[])=>void;

class ProjectState{
    private listeners:Listener[]=[];
    private projects:Project[]=[];
    private static instance:ProjectState
    private constructor() {

    }
    static getInstance(){
        if(!ProjectState.instance){
            ProjectState.instance=new ProjectState();
        }
        return ProjectState.instance;
    }
    addProject(title:string,description:string,numOfPeople:number){
        const newProject=new Project(
            Math.random().toString(),
            title,
            description,
            numOfPeople,
            Status.ACTIVE
        )
        this.projects.push(newProject);
        for (const listener of this.listeners){
            listener(this.projects.slice());
        }
    }
    addListener(listenerFn:Listener){
        this.listeners.push(listenerFn);
    }

}

const projectState=ProjectState.getInstance()

// validation logic
interface Validatable{
    value: string | number;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
}
function validate(validatableInput: Validatable){
    let isValid = true;
    if(validatableInput.required){
        isValid = isValid && validatableInput.value.toString().trim().length !== 0;
    }
    if(validatableInput.minLength!=null && typeof validatableInput.value === 'string'){
        isValid = isValid && validatableInput.value.length >= validatableInput.minLength;
    }
    if(validatableInput.maxLength!=null && typeof validatableInput.value === 'string'){
        isValid = isValid && validatableInput.value.length <= validatableInput.maxLength;
    }
    if(validatableInput.min!=null && typeof validatableInput.value === 'number'){
        isValid = isValid && validatableInput.value >= validatableInput.min;
    }
    if(validatableInput.max!=null && typeof validatableInput.value === 'number'){
        isValid = isValid && validatableInput.value <= validatableInput.max;
    }
    return isValid;
}
// autobind decorator
function Autobind(_:any,methodName:string,descriptor:PropertyDescriptor){
    console.log(methodName)
    const originalMethod = descriptor.value;
    console.log(originalMethod)
    const adjDescriptor:PropertyDescriptor = {
        configurable:true,
        enumerable:false,
        get(){
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    }
    return adjDescriptor;
}
// ProjectList Class
class ProjectList{
    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    element: HTMLElement
    assignProject: Project[];
    constructor(private type:'active'|'finished') {
        this.templateElement =<HTMLTemplateElement> document.getElementById('project-list')!;
        this.hostElement =<HTMLDivElement> document.getElementById('app')!;
        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = <HTMLElement>importedNode.firstElementChild;
        this.assignProject = []
        this.element.id=`${this.type}-projects`;
        this.attach()
        this.renderContent()
        projectState.addListener((projects:Project[])=>{
            this.assignProject=projects
            this.renderProject()
        })
    }
    private renderProject(){
        console.log(this.type)
        const listEL=<HTMLUListElement>document.getElementById(`${this.type}-projects-list`);
        for (const item of this.assignProject){
            console.log(item);
            const listItem=document.createElement('li');
            listItem.textContent=item.title
            listEL.appendChild(listItem);
        }
    }

    private attach(){
        this.hostElement.insertAdjacentElement('beforeend', this.element);
    }
    private renderContent(){
        const listId = `${this.type}-projects-list`;
        this.element.querySelector('ul')!.id = listId;
        this.element.querySelector('h2')!.textContent = this.type.toUpperCase() + ' PROJECTS';

    }
}



class ProjectInput{
    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    element: HTMLFormElement;
    titleInputElement: HTMLInputElement;
    descriptionInputElement: HTMLInputElement;
    peopleInputElement: HTMLInputElement;
    constructor() {
        this.templateElement =<HTMLTemplateElement> document.getElementById('project-input')!;
        this.hostElement =<HTMLDivElement> document.getElementById('app')!;

        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = <HTMLFormElement>importedNode.firstElementChild;
        this.element.id='user-input'
        this.titleInputElement = <HTMLInputElement>this.element.querySelector('#title');
        this.descriptionInputElement = <HTMLInputElement>this.element.querySelector('#description');
        this.peopleInputElement = <HTMLInputElement>this.element.querySelector('#people');

        this.configure()
        this.attach();
    }
    private clearInputs(){
        this.titleInputElement.value = '';
        this.descriptionInputElement.value = '';
        this.peopleInputElement.value = '';
    }
    private gatherUserInput():[string,string,number]|undefined{
        const enteredTitle = this.titleInputElement.value;
        const enteredDescription = this.descriptionInputElement.value;
        const enteredPeople = this.peopleInputElement.value;
        const titleValidatable:Validatable = {
            value:enteredTitle,
            required:true
        }
        const descriptionValidatable:Validatable = {
            value:enteredDescription,
            required:true,
            minLength:5
        }
        const peopleValidatable:Validatable = {
            value:+enteredPeople,
            required:true,
            min:1,
            max:10
        }
        if(
            !validate(titleValidatable) ||
            !validate(descriptionValidatable) ||
            !validate(peopleValidatable)
        ){
            alert('Invalid input, please try again');
            return;
        }else{
            return [enteredTitle,enteredDescription,+enteredPeople];
        }
    }
    @Autobind
    private submitHandler(event: Event){
        event.preventDefault();
        const userInput = this.gatherUserInput();
        if(Array.isArray(userInput) ){
            const [title,desc,people] = userInput;
            projectState.addProject(title,desc, people);
            this.clearInputs();
        }
    }

    @Autobind
    private configure(){
        this.element.addEventListener('submit', this.submitHandler);

    }
    private attach(){
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
    }
}
const projectInput = new ProjectInput()
const projectList1=new ProjectList('active')
const projectList2=new ProjectList('finished')

