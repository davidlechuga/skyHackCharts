import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../pages/style/Badges.css';
//datos de la republica Mexicana
import DB from '../db/data.json';
import ListaGraficas from '../components/ListaGraficas'

class Badges extends Component {
	state = {
		datos: DB.datos
	};

	render() {
		return (
			<Fragment>
				<div className="main-container">
					<div className="background">
						<div className="titulo">
							<h1 className="title_one"> TwitGov Dentro Del Gobierno </h1>
						</div>
					</div>
				</div>

				<div className="container">
					<div className="__buttons">
						<Link to="/" className="btn btn-primary">
							{' '}
							NEX PAGE >
						</Link>
					</div>
				</div>

				<div className="Badges__list">
                    <div className="List__container">
                        <ListaGraficas datos={this.state.datos} />
					</div>
				</div>

			</Fragment>
		);
	}
}

export default Badges;
