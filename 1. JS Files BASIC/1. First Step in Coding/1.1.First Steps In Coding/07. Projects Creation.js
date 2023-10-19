function projectsCreation(input) {

    let archName = input[0];
    let project = Number(input[1]);
    let timeNeed = project * 3;

    let hn = `The arcitect ${archName} will need ${project} hours to complete ${timeNeed} projects/s`
    // •	"The architect {името на архитекта} will need {необходими часове} hours to complete {брой на проектите} project/s."

    console.log(hn);

}
projectsCreation (["Nikolay", "9"])