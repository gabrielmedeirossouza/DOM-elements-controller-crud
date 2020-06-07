import LayersList from '../models/LayersList.js';
import LayersView from '../views/LayersView.js';
import Layer from '../models/Layer.js';

class LayersController {

	constructor() {

		const $ = x => document.querySelector(x);

		const self = this;
		this._layersList = new Proxy(new LayersList(), {
			get(obj, prop, value) {

				if(typeof(obj[prop]) == typeof(Function) && ['add', 'delete'].includes(prop)) {
					return function() {
						Reflect.apply(obj[prop], obj, arguments);
						self._layersView.update(obj);
					}
				}

				return Reflect.get(obj, prop, value);
			}
		});

		this._layersView = new LayersView($('#timeline'));

		this._layersList.add(new Layer('Parado'));
		this._layersList.add(new Layer('Andando-devagar-1'));
		this._layersList.add(new Layer('Andando-devagar-2'));
		this._layersList.add(new Layer('Andando-devagar-3'));
		this._layersList.add(new Layer('Andando-devagar-4'));
		this._layersList.add(new Layer('Correndo-1'));

		this._inputName = $('#name');
		this._buttonAdd = $('#add');

		this._buttonAdd.addEventListener('click', () => this.add())
	}

	add() {
		this._layersList.add(this._createLayer());
		this._clearFocus();
	}

	delete(index) {
		this._layersList.delete(index);
	}

	_createLayer() {
		return new Layer(
			this._inputName.value
		);
	}

	_clearFocus() {
		this._inputName.value = '';
	}
}

export default LayersController;
