import "./index.css"

function SystemName(props: { name: string }) {

  return (
    <div className="button">
      {props.name}
    </div>
  )
}

export default SystemName
