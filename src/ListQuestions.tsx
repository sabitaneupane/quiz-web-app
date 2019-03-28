import * as React from 'react';

class ListQuesitons extends React.Component<any, any> {
    constructor(props: any){
        super(props);
        this.state = { question: this.props.questionsList };
    }

	render() {
		return (
            <div>
                { this.state.question }
            </div>
        );
	}
}

export default ListQuesitons;


