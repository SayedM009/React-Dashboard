/* eslint-disable react/prop-types */
import { useState } from "react";
const destinationsSectionStyle = {
  width: "350px",
  height: "auto",
  maxHeight: "350px",
  background: "white",
  marginTop: ".5rem",
  overflowY: "scroll",
  msScrollbarTrackColor: "red",
  scrollbarWidth: "thin",
};

const countries = [
  {
    countryName: "Egypt",
    cityName: "Cairo",
    airportCode: "CAI",
    airportName: "Cairo International Airport",
  },
  {
    countryName: "Egypt",
    cityName: "Alexandria",
    airportCode: "HBE",
    airportName: "Borg El Arab International Airport, Alexandria",
  },
  {
    countryName: "UAE",
    cityName: "Dubai",
    airportCode: "DXB",
    airportName: "Dubai International Airport",
  },
  {
    countryName: "UAE",
    cityName: "Abu Dhabi",
    airportCode: "AUH",
    airportName: "Abu Dhabi International Airport",
  },
];

function SearchBar() {
  const [isClicked, setIsClicked] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [mouseOn, setMounseOn] = useState(false);
  return (
    <>
      <input
        type="search"
        style={
          isClicked
            ? {
                width: "350px",
                borderRadius: "5px",
                transition: "all 0.2s linear",
                border: "none",
                outline: "none",
                padding: ".7rem",
              }
            : {
                width: "250px",
                borderRadius: "5px",
                transition: "all 0.2s linear",
                border: "none",
                outline: "none",
                padding: ".5rem",
              }
        }
        onFocus={() => setIsClicked(true)}
        onBlur={() => setIsClicked(mouseOn ? true : false)}
        onChange={(e) => setSearchQuery(e.target.value)}
        value={searchQuery}
      ></input>
      {isClicked && (
        <div
          style={destinationsSectionStyle}
          onMouseOver={() => setMounseOn(true)}
          onMouseLeave={() => setMounseOn(false)}
        >
          {searchQuery.length == 0 ? (
            // Prepaired Destinations
            <PreparedDestinations setSearchQuery={setSearchQuery} />
          ) : (
            <ul>
              {countries
                .filter(
                  (country) =>
                    country.cityName
                      .toLocaleLowerCase()
                      .includes(searchQuery.toLocaleLowerCase()) ||
                    country.airportCode.includes(searchQuery.toUpperCase())
                )
                .map((country, i) => {
                  return country.airportCode
                    .toUpperCase()
                    .includes(searchQuery) ? (
                    <li
                      key={i}
                      onClick={() => {
                        setSearchQuery(country.cityName);
                        setIsClicked(false);
                      }}
                    >
                      {/* Normal Destinaltions */}
                      <Destination country={country} />
                    </li>
                  ) : (
                    <li
                      key={i}
                      onClick={() => {
                        setSearchQuery(country.cityName);
                        setIsClicked(false);
                      }}
                    >
                      {/* Colored Destinaltions */}
                      <Destination
                        country={country}
                        searchQuery={searchQuery}
                        colored={true}
                      />
                    </li>
                  );
                })}
            </ul>
          )}
        </div>
      )}
    </>
  );
}

export default SearchBar;

function Destination({ country, searchQuery, colored }) {
  if (colored) {
    return (
      <div style={{ padding: "1rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <p>
            {country.cityName
              .toLocaleLowerCase()
              .startsWith(searchQuery.toLocaleLowerCase()) ? (
              <p>
                <span style={{ color: "blue", fontWeight: "bold" }}>
                  {searchQuery[0].toUpperCase() +
                    searchQuery.toLocaleLowerCase().slice(1)}
                </span>
                <span>{country.cityName.slice(searchQuery.length)}</span>
              </p>
            ) : (
              <p>
                <span>
                  {country.cityName.slice(
                    0,
                    country.cityName.indexOf(searchQuery)
                  )}
                </span>
                <span style={{ color: "blue", fontWeight: "bold" }}>
                  {country.cityName.includes(searchQuery) && searchQuery}
                </span>
                <span>
                  {country.cityName.includes(searchQuery)
                    ? country.cityName.slice(
                        country.cityName.indexOf(searchQuery) +
                          searchQuery.length
                      )
                    : ""}
                </span>
              </p>
            )}
          </p>
          <p>{country.airportCode}</p>
        </div>
        <p>{country.countryName}</p>
      </div>
    );
  } else {
    return (
      <div style={{ padding: "1rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <p>{country.cityName} </p>
          <p>{country.airportCode}</p>
        </div>
        <p>{country.countryName}</p>
      </div>
    );
  }
}

function PreparedDestinations({ setSearchQuery }) {
  return (
    <>
      <h3 style={{ width: "100%", background: "#CCC", padding: ".5rem" }}>
        Asia
      </h3>
      <div
        id="Asia"
        style={{
          display: "flex",
          flexWrap: "wrap",
          padding: ".5rem",
          margin: ".5rem 0",
          columnGap: "1rem",
        }}
      >
        <p
          onClick={() => setSearchQuery("Dubai")}
          style={{ cursor: "pointer" }}
        >
          Dubai
        </p>
        <p>Riyahd</p>
        <p>Abu Dahbi</p>
      </div>
      <h3 style={{ width: "100%", background: "#CCC", padding: ".5rem" }}>
        Europe
      </h3>
      <div
        id="Europe"
        style={{
          display: "flex",
          flexWrap: "wrap",
          padding: ".5rem",
          margin: ".5rem 0",
          columnGap: "1rem",
        }}
      >
        <p>London</p>
        <p>Birlean</p>
        <p>Pairs</p>
        <p>Milano</p>
        <p>Barclona</p>
        <p>Mosco</p>
      </div>
      <h3 style={{ width: "100%", background: "#CCC", padding: ".5rem" }}>
        Africa
      </h3>
      <div
        id="Asia"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          padding: ".5rem",
          margin: ".5rem 0",
        }}
      >
        <p>Cairo</p>
        <p>South Africa</p>
        <p>Algeria</p>
        <p>Tunsia</p>
        <p>Moroco</p>
      </div>
      <h3 style={{ width: "100%", background: "#CCC", padding: ".5rem" }}>
        Asia
      </h3>
      <div
        id="Asia"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          padding: ".5rem",
          margin: ".5rem 0",
        }}
      >
        <p>Dubai</p>
        <p>Riyahd</p>
        <p>Abu Dahbi</p>
      </div>
      <h3 style={{ width: "100%", background: "#CCC", padding: ".5rem" }}>
        Asia
      </h3>
      <div
        id="Asia"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          padding: ".5rem",
          margin: ".5rem 0",
        }}
      >
        <p>Dubai</p>
        <p>Riyahd</p>
        <p>Abu Dahbi</p>
      </div>
      <h3 style={{ width: "100%", background: "#CCC", padding: ".5rem" }}>
        Asia
      </h3>
      <div
        id="Asia"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          padding: ".5rem",
          margin: ".5rem 0",
        }}
      >
        <p>Dubai</p>
        <p>Riyahd</p>
        <p>Abu Dahbi</p>
      </div>
    </>
  );
}
