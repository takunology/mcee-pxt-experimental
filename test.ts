mceeExperimental.onTrigger(ExperimentalTrigger.Start, function () {
    mceeExperimental.setNumber(ExperimentalSlot.A, 1);
});

mceeExperimental.onStart(function () {
    mceeExperimental.messageOptions("start", 1, true);
});

mceeExperimental.onValue(7, function (value) {
    mceeExperimental.setNumber(ExperimentalSlot.D, value);
});

mceeExperimental.setMode(ExperimentalMode.Easy);
mceeExperimental.setToggleMenu(true);
mceeExperimental.setPower(75);
mceeExperimental.chooseDirection(ExperimentalDirection.Right);
mceeExperimental.chooseCell(ExperimentalGridCell.Center);
mceeExperimental.setPattern3x3("111010010");
mceeExperimental.setPattern5x5("1000101010001000101010001");
mceeExperimental.pickColor(ExperimentalColor.Red);
mceeExperimental.pickItem(Item.Apple);
mceeExperimental.pickAddonItem(ExperimentalAddonItem.EmeraldRod);
mceeExperimental.pickScrollItem(ExperimentalScrollItem.Item01);
mceeExperimental.compareImageSize(ExperimentalImageSizeIcon.Rod64);
mceeExperimental.setNumber(ExperimentalSlot.A, mceeExperimental.imageSizeValue());
mceeExperimental.pickLabelList(mceeExperimental.scrollItemId());
mceeExperimental.ifDo(mceeExperimental.isGreater(5, 2), function () {
    mceeExperimental.pickLabelList("村");
});
mceeExperimental.elseDo(mceeExperimental.isGreater(1, 2), function () {
    mceeExperimental.pickLabelList("洞窟");
});
mceeExperimental.setNumber(ExperimentalSlot.A, mceeExperimental.sumNumbers([1, 2, 3]));
mceeExperimental.setNumber(ExperimentalSlot.C, mceeExperimental.arrayGet([10, 20, 30], 1));
mceeExperimental.messageOptions("go", 2, true);
mceeExperimental.setNumber(ExperimentalSlot.D, mceeExperimental.expandMath(10, 1, 2, 30));
mceeExperimental.setNumber(ExperimentalSlot.B, mceeExperimental.calculate(6, ExperimentalOperation.Multiply, 7));
mceeExperimental.setFlag(ExperimentalSlot.C, mceeExperimental.getNumber(ExperimentalSlot.B) == 42);
mceeExperimental.fireTrigger(ExperimentalTrigger.Start);
