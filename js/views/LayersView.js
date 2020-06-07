class LayersView {

	constructor(element) {
		this._element = element;
	}

	_template(layersList) {
		return `
			<table class="layers">
				<tbody>
					<tr>
					${layersList
						.layers
						.map((c, i) => `
							<td class="layer">
								<div>
									<label>${c.name}</label>
									<button onclick="window.layersController.delete(${i})">X</button>
								</div>
								<canvas class="frame"></canvas>
							</td>
							`).join('')}
					</tr>
				</tbody>
			</table>
		`;
	}

	update(model) {
		this._element.innerHTML = this._template(model);
	}
}

export default LayersView;
