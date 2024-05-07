

export const CriptoSearchForm = () => {
  return (
    <form className="form">
         {/*Moneda*/}
        <div className="field">
            <label htmlFor="currency">Moneda:</label>
            <select
                name="currency"
                id="currency"
            >
                <option value="">-- Selecciona --</option>
            </select>
        </div>

        {/*Cripto*/}
        <div className="field">
            <label htmlFor="criptocurrency">Critomoneda:</label>
            <select
                name="criptocurrency"
                id="criptocurrency"
            >
                <option value="">-- Selecciona --</option>
            </select>
        </div>

        <input type="submit" value="Submit"></input>

    </form>
  )
}
