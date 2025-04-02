import { ways } from "../data"
import MyWay from "./MyWay"

export default function TeachingSection() {
  return (
    <section>
      <h1>Мій підхід до навчання</h1>
      <ul>
        {ways.map((way) => <MyWay key={way.title} {...way} />)}
      </ul>
    </section>
  )
}