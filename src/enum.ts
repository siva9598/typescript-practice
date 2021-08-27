enum Status {
    NotStarted,
    InProgress,
    Done
}
console.log(Status.InProgress);

let notStartedStatus:Status = Status.NotStarted;

notStartedStatus = "foo"; // cannot assign anything other that the ones in the enum