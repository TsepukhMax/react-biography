import Button from "./button/button";

export default function TabsSection({active, onChange}) {
  return (
    <section style={{marginBottom: '1 rem'}}>
      <Button isSelected={active === 'main'} buttonClicked={() => onChange('main')}>Головна</Button>
      <Button isSelected={active === 'feedback'} buttonClicked={() => onChange('feedback')}>Зворотній зв'язок</Button>
    </section>
  )
}