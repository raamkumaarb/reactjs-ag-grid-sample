import React from 'react';
import {AgGridReact} from 'ag-grid-react';
import userDataService from '../services/userDataService';

//import 'ag-grid-enterprise';

// create your cellRenderer as a React component
class NameCellRenderer extends React.Component {
    render() {
        return <span>{this.props.rowIndex+1}</span>;
    }
}

class Grid extends React.Component {

   	constructor() {
        super();
        this.state = {
			columnDefs : [ 	{displayName:'#', cellRendererFramework: NameCellRenderer, suppressMenu: true},
							{headerName: "First Name", field: "firstname"},
							{headerName: "Last Name", field: "lastname"},
							{headerName: "Country", field: "country"} ],
			rowData : new userDataService().createRowData()
			}
		}


    onGridReady(params) {
        this.api = params.api;
        this.columnApi = params.columnApi;
    }

    alignSelectedCell(alignment) {
    	if( this.api.getFocusedCell() ){
    		/*
    		console.log(this.api.getFocusedCell().column.colDef)
    		console.log(this.api.getFocusedCell().column.cellStyle)
    		console.log(this.api.getFocusedCell().column.cellClass)
    		*/
    		// There is no API method available for set style. So using vanilla JS here
    		document.getElementsByClassName('ag-cell-focus')[0].style['text-align'] = alignment;
    	} else {
    		alert('please select a cell')
    	}
    }

   	render() {

      return (
      	<div className="col-xs-12 grid-page">
      	<button type="button" className="btn btn-success" onClick={this.alignSelectedCell.bind(this, 'left')}>Align left</button>
		<button type="button" className="btn btn-info" onClick={this.alignSelectedCell.bind(this, 'center')}>Align center</button>
		<button type="button" className="btn btn-warning" onClick={this.alignSelectedCell.bind(this, 'right')}>Align right</button>
        <div style={{height: 250,width : 820}} className="ag-fresh">
            <AgGridReact
                    // binding to array properties
                    columnDefs={this.state.columnDefs}
                    rowData={this.state.rowData}
                    // listening for events
                    onGridReady={this.onGridReady.bind(this)}
                    // no binding, just providing hard coded strings for the properties
                    rowSelection="multiple"
                    enableColResize="true"
                    enableSorting="true"
                    enableFilter="true"
                    groupHeaders="true"
                    rowHeight="22"
                    suppressRowClickSelection="false"
                    debug="true"
                />
        </div>
        </div>
      );
   }
}

export default Grid;