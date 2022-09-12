package videogamedb.feeders

import io.gatling.core.scenario.Simulation
import io.gatling.http.Predef._
import io.gatling.core.Predef._

class CsvFeeder extends Simulation{

  val httpProtocol= http.baseUrl("https://videogamedb.uk/api")
    .acceptHeader("application/json")

  val csvFeeder= csv("data/gameCsvFile.csv").circular


  def getSpecificVideoGame()= {
    repeat(10) {
      feed(csvFeeder)
        .exec(http("Games from csv file using feeder with name - #{gameName}")
        .get("/videogame/#{gameId}")
        .check(jsonPath("$.name").is("#{gameName}"))
        .check(status.is(200)))
        .pause(1)
    }

  }

  val scn = scenario("Csv Feeder test")
    .exec(getSpecificVideoGame())


  setUp(
    scn.inject(atOnceUsers(1))
  ).protocols(httpProtocol)

}
