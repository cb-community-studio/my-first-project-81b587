
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';


const ProductsDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const pTemplate1 = (rowData, { rowIndex }) => <p >{rowData.name}</p>
    const pTemplate2 = (rowData, { rowIndex }) => <p >{rowData.brand}</p>
    const pTemplate3 = (rowData, { rowIndex }) => <p >{rowData.price}</p>
    const pTemplate4 = (rowData, { rowIndex }) => <p >{rowData.rating}</p>
    const tickTemplate5 = (rowData, { rowIndex }) => <i className={`pi ${rowData.inStock?"pi-check": "pi-times"}`}  ></i>

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    
    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10} rowClassName="cursor-pointer">
            <Column field="sku" header="Name"  style={{ minWidth: "8rem" }} />
            <Column field="name" header="name" body={pTemplate1} sortable style={{ minWidth: "8rem" }} />
            <Column field="brand" header="brand" body={pTemplate2} sortable style={{ minWidth: "8rem" }} />
            <Column field="price" header="price" body={pTemplate3} sortable style={{ minWidth: "8rem" }} />
            <Column field="rating" header="rating" body={pTemplate4} sortable style={{ minWidth: "8rem" }} />
            <Column field="inStock" header="Available" body={tickTemplate5} sortable style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
        </DataTable>
    );
};

export default ProductsDataTable;