import * as React from 'react';

class Answerdisplay extends React.Component<any, any> {
    constructor(props: any){
        super(props);
    }

	render() {
		return (
            <div>
                Correct ans: {this.props.correctAnswer} 
            </div>
        );
	}
}

export default Answerdisplay;


