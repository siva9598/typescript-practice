var Status;
(function (Status) {
    Status[Status["NotStarted"] = 0] = "NotStarted";
    Status[Status["InProgress"] = 1] = "InProgress";
    Status[Status["Done"] = 2] = "Done";
})(Status || (Status = {}));
console.log(Status.InProgress);
var notStartedStatus = Status.NotStarted;
notStartedStatus = "foo"; // cannot assign anything other that the ones in the enum
