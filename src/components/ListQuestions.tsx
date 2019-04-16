import * as React from 'react';

class ListQuesitons extends React.Component<any, any> {
    constructor(props: any){
        super(props);
    }

	render() {
		return (
            <div>
                {this.props.questionsList}
            </div>
        );
	}
}

export default ListQuesitons;


