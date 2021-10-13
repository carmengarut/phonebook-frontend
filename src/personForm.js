export const PersonForm = ({handleSubmit, name, number, handleName, handleNumber}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                name: <input value={name} onChange={handleName}/>
            </div>
            <div>
                number: <input value={number} onChange={handleNumber}/>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
      </form>
    )
}