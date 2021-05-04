const day = "monday";


switch (day) {
    case "monday": //day==="monday" strict equality
        console.log(`first day`);
        console.log(`work day`);
        break;
    case "tuesday":
        console.log(`second day`);
        break;
    default:
        console.log(`not a valid day!`);
}


if (day === "saturday") {
    console.log(`first day of week`)
} else if (day === "tuesday") {
    console.log(`second day of weeek`)
} else {
    console.log(`not a valid day`)
}