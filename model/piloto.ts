class Piloto{
    //Instalar TypeScript Toolbox
    //Pulsas F1 y escribir getter
    
    //Atributos con guion bajo

    
    private _nombre: string;
    
    //Constructor solo se puede 1, no existe sobrecarga
    constructor(){
        this._nombre = "";
    }

    //Getters y setters

    /**
     * Getter nombre
     * @return {string}
     */
	public get nombre(): string {
		return this._nombre;
	}

    /**
     * Setter nombre
     * @param {string} value
     */
	public set nombre(value: string) {
		this._nombre = value;
    }
    
    //Otras funciones

}