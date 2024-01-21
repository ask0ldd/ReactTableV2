React Table Component Package (WIP)

Forthcoming update : Color & Font Customisation + Various Presets.

On NPM : https://www.npmjs.com/package/@asklddco/react-table

DOCUMENTATION

## Step 1 - Build your Table Model

The Table Model is essential for defining the relationships between the displayed table and the data object.

Let's now build this model into the react page component that will host your react table.

**A - Instanciate the TableModel and give it a name :**

<img src="/public/1-createmodel-2.png"/>

This model will be key in order to define the following properties :

- Which specific datas should be extracted from your data object.
- Of which types those datas are. Mandatory since it will auto-define a sorting algorithm (sortability being activated or not).
- Which name should be given to your columns (your '< th >' tag content).
- Are some of your columns sortable ?

**B - Using the ColumnBuilder, you should now add some columns to your model :**

<img src="/public/2-addcolumns-4.png"/>

As expected, with :

- <b>setColumnName()</b> : We give a name to our column.
- <b>setDatatypeAsString()</b> : We define the data type that should populate my column. Here it should be populated with strings.
- <b>setAccessor()</b> : We specifie the key in the data object associated with the value needed to fill the column.
- <b>SetSortability()</b> : We indicate to our model if our column should be sortable or not.

Here are the different methods to define your datatypes :

- setDatatypeAsString()
- setDatatypeAsNumber()
- setDatatypeAsDate()

As an example, building this model would qualify for such a data object :

<img src="/public/3-userdatas-3.png"/>

And you would then end up with the following three sortable columns table :

<img src="/public/5-tableexample.png"/>

## Step 2 - Using your component

Now that your tableModel is defined, you can simply use our DatasTable component. Pass it your built model and your data object as follow :

<img src="/public/4-component-2.png"/>

## Subcomponents

All those components are integrated by default to the Table component with no customization possible at the moment.

<img src="/public/6-subcomponents.png">
