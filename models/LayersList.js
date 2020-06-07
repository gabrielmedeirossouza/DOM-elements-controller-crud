class LayersList {

	constructor() {
		this._layers = [];
	}

	add(contact) {
		this._layers.push(contact);
	}

	delete(index) {
		this._layers.splice(index, 1);
	}

	get layers() {
		return this._layers;
	}	
}