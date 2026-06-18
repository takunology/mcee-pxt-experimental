mceeExperimental.onTrigger(ExperimentalTrigger.Start, function () {
    mceeExperimental.setNumber(ExperimentalSlot.A, 1);
});

mceeExperimental.setMode(ExperimentalMode.Easy);
mceeExperimental.setToggleMenu(true);
mceeExperimental.setPower(75);
mceeExperimental.chooseDirection(ExperimentalDirection.Right);
mceeExperimental.chooseCell(ExperimentalGridCell.Center);
mceeExperimental.setNumber(ExperimentalSlot.B, mceeExperimental.calculate(6, ExperimentalOperation.Multiply, 7));
mceeExperimental.setFlag(ExperimentalSlot.C, mceeExperimental.getNumber(ExperimentalSlot.B) == 42);
mceeExperimental.fireTrigger(ExperimentalTrigger.Start);
