var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "403",
        "ok": "403",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "42",
        "ok": "42",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "413",
        "ok": "413",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "60",
        "ok": "60",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "37",
        "ok": "37",
        "ko": "-"
    },
    "percentiles1": {
        "total": "49",
        "ok": "49",
        "ko": "-"
    },
    "percentiles2": {
        "total": "54",
        "ok": "54",
        "ko": "-"
    },
    "percentiles3": {
        "total": "153",
        "ok": "153",
        "ko": "-"
    },
    "percentiles4": {
        "total": "196",
        "ok": "196",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 403,
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
        "total": "7.327",
        "ok": "7.327",
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
        "total": "272",
        "ok": "272",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "43",
        "ok": "43",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "413",
        "ok": "413",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "65",
        "ok": "65",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "44",
        "ok": "44",
        "ko": "-"
    },
    "percentiles1": {
        "total": "49",
        "ok": "49",
        "ko": "-"
    },
    "percentiles2": {
        "total": "58",
        "ok": "58",
        "ko": "-"
    },
    "percentiles3": {
        "total": "163",
        "ok": "163",
        "ko": "-"
    },
    "percentiles4": {
        "total": "199",
        "ok": "199",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 272,
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
        "total": "4.945",
        "ok": "4.945",
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
        "total": "131",
        "ok": "131",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "42",
        "ok": "42",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "95",
        "ok": "95",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "49",
        "ok": "49",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "6",
        "ok": "6",
        "ko": "-"
    },
    "percentiles1": {
        "total": "48",
        "ok": "48",
        "ko": "-"
    },
    "percentiles2": {
        "total": "51",
        "ok": "51",
        "ko": "-"
    },
    "percentiles3": {
        "total": "57",
        "ok": "57",
        "ko": "-"
    },
    "percentiles4": {
        "total": "63",
        "ok": "63",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 131,
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
        "total": "2.382",
        "ok": "2.382",
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
