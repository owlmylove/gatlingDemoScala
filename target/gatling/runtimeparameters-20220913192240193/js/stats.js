var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "3160",
        "ok": "3160",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "41",
        "ok": "41",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "347",
        "ok": "347",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "50",
        "ok": "50",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "18",
        "ok": "18",
        "ko": "-"
    },
    "percentiles1": {
        "total": "47",
        "ok": "47",
        "ko": "-"
    },
    "percentiles2": {
        "total": "50",
        "ok": "50",
        "ko": "-"
    },
    "percentiles3": {
        "total": "60",
        "ok": "60",
        "ko": "-"
    },
    "percentiles4": {
        "total": "153",
        "ok": "153",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3160,
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
        "total": "126.4",
        "ok": "126.4",
        "ko": "-"
    }
},
contents: {
"req_get-all-games-c1289": {
        type: "REQUEST",
        name: "Get all games",
path: "Get all games",
pathFormatted: "req_get-all-games-c1289",
stats: {
    "name": "Get all games",
    "numberOfRequests": {
        "total": "1582",
        "ok": "1582",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "41",
        "ok": "41",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "347",
        "ok": "347",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "52",
        "ok": "52",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "22",
        "ok": "22",
        "ko": "-"
    },
    "percentiles1": {
        "total": "47",
        "ok": "47",
        "ko": "-"
    },
    "percentiles2": {
        "total": "50",
        "ok": "50",
        "ko": "-"
    },
    "percentiles3": {
        "total": "64",
        "ok": "64",
        "ko": "-"
    },
    "percentiles4": {
        "total": "158",
        "ok": "158",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1582,
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
        "total": "63.28",
        "ok": "63.28",
        "ko": "-"
    }
}
    },"req_get-specific-ga-03796": {
        type: "REQUEST",
        name: "Get specific game",
path: "Get specific game",
pathFormatted: "req_get-specific-ga-03796",
stats: {
    "name": "Get specific game",
    "numberOfRequests": {
        "total": "1578",
        "ok": "1578",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "42",
        "ok": "42",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "220",
        "ok": "220",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "49",
        "ok": "49",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "13",
        "ok": "13",
        "ko": "-"
    },
    "percentiles1": {
        "total": "46",
        "ok": "46",
        "ko": "-"
    },
    "percentiles2": {
        "total": "50",
        "ok": "50",
        "ko": "-"
    },
    "percentiles3": {
        "total": "58",
        "ok": "58",
        "ko": "-"
    },
    "percentiles4": {
        "total": "73",
        "ok": "73",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1578,
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
        "total": "63.12",
        "ok": "63.12",
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
