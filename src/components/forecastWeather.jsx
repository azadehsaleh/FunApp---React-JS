import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

const weekdays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const ForecastWeather = ({ data }) => {
  //number of current day of the week
  const dayInOneWeek = new Date().getDay();

  //start from current day and continue in lenght of a week (from Fridat to Thursday for example)
  const forecastDays = weekdays
    .slice(dayInOneWeek, weekdays.length)
    .concat(weekdays.slice(0, dayInOneWeek));

  return (
    <>
      <h3 className="m-3 text-primary">Forecast</h3>
      <label className="title text-success m-3">Daily</label>
      <Accordion allowZeroExpanded>
        {/* forecast one weeks for example */}
        {data.list.splice(0, 7).map((item, index) => (
          <AccordionItem key={index}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img
                    src={`icons/${item.weather[0].icon}.png`}
                    className="icon-small"
                    alt="weather"
                  />
                  <label className="day">{forecastDays[index]}</label>
                  <label className="description">
                    {item.weather[0].description}
                  </label>
                  <label className="min-max">
                    {Math.round(item.main.temp_max)}°C / {Math.round(item.main.temp_min)}°C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-details-grid">
                <div className="daily-details-grid-item">
                  <label className="text-light">Pressure:</label>
                  <label className="text-light">{item.main.pressure}</label>
                </div>
                <div className="daily-details-grid-item">
                  <label className="text-light">Humidity:</label>
                  <label className="text-light">{item.main.humidity}</label>
                </div>
                <div className="daily-details-grid-item">
                  <label className="text-light">Clouds:</label>
                  <label className="text-light">{item.clouds.all}%</label>
                </div>
                <div className="daily-details-grid-item">
                  <label className="text-light">Wind speed:</label>
                  <label className="text-light">{item.wind.speed} m/s</label>
                </div>
                <div className="daily-details-grid-item">
                  <label className="text-light">Sea level:</label>
                  <label className="text-light">{item.main.sea_level}m</label>
                </div>
                <div className="daily-details-grid-item">
                  <label className="text-light">Feels like:</label>
                  <label className="text-light">{item.main.feels_like}°C</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default ForecastWeather;
