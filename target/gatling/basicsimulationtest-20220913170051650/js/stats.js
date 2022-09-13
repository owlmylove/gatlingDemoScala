var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "30",
        "ok": "30",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "45",
        "ok": "45",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "425",
        "ok": "425",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "122",
        "ok": "122",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "85",
        "ok": "85",
        "ko": "-"
    },
    "percentiles1": {
        "total": "106",
        "ok": "106",
        "ko": "-"
    },
    "percentiles2": {
        "total": "165",
        "ok": "165",
        "ko": "-"
    },
    "percentiles3": {
        "total": "208",
        "ok": "208",
        "ko": "-"
    },
    "percentiles4": {
        "total": "362",
        "ok": "362",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 30,
    "percentage": 100
},
    "group2": {
    "name": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "3",
        "ok": "3",
        "ko": "-"
    }
},
contents: {
"req_get-all-video-g-6a25e": {
        type: "REQUEST",
        name: "Get all video games",
path: "Get all video games",
pathFormatted: "req_get-all-video-g-6a25e",
stats: {
    "name": "Get all video games",
    "numberOfRequests": {
        "total": "15",
        "ok": "15",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "152",
        "ok": "152",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "425",
        "ok": "425",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "194",
        "ok": "194",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "66",
        "ok": "66",
        "ko": "-"
    },
    "percentiles1": {
        "total": "166",
        "ok": "166",
        "ko": "-"
    },
    "percentiles2": {
        "total": "203",
        "ok": "203",
        "ko": "-"
    },
    "percentiles3": {
        "total": "273",
        "ok": "273",
        "ko": "-"
    },
    "percentiles4": {
        "total": "395",
        "ok": "395",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 15,
    "percentage": 100
},
    "group2": {
    "name": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.5",
        "ok": "1.5",
        "ko": "-"
    }
}
    },"req_get-a-specific--4c9b6": {
        type: "REQUEST",
        name: "Get a specific video game",
path: "Get a specific video game",
pathFormatted: "req_get-a-specific--4c9b6",
stats: {
    "name": "Get a specific video game",
    "numberOfRequests": {
        "total": "15",
        "ok": "15",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "45",
        "ok": "45",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "59",
        "ok": "59",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "51",
        "ok": "51",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "4",
        "ok": "4",
        "ko": "-"
    },
    "percentiles1": {
        "total": "50",
        "ok": "50",
        "ko": "-"
    },
    "percentiles2": {
        "total": "52",
        "ok": "52",
        "ko": "-"
    },
    "percentiles3": {
        "total": "59",
        "ok": "59",
        "ko": "-"
    },
    "percentiles4": {
        "total": "59",
        "ok": "59",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 15,
    "percentage": 100
},
    "group2": {
    "name": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.5",
        "ok": "1.5",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
