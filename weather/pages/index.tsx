import {
  CurrentForecast,
  ForecastCard,
  SevenDayForecast,
  usePageInteractions,
} from "../devlink";

export default function Home() {
  return (
    <>
      <SevenDayForecast cards={<ForecastCard />} />
      <CurrentForecast />
    </>
  );
}
