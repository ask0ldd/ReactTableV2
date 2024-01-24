React Table Component Package (WIP)

Forthcoming update : More Presets & An easy Way to build your own Presets.

On NPM : https://www.npmjs.com/package/@asklddco/react-table

DOCUMENTATION

## Table Of Content

[1 - Build Your Table Model](#step-1---build-your-table-model)

[2 - Using the Table Component](#step-2---using-the-table-component)

[3 - Subcomponents (FYI only)](#subcomponents-/fyi-only/)

[4 - Presets & Adding the Font of your Choice ](#presets-and-adding-the-font-of-your-choice)

[5 - Presets Deeper Customization](#presets-deeper-customization)

[6 - Simple React Example ](#simple-react-example)

## Step 1 - Build your Table Model

The Table Model is essential for defining the relationships between the displayed table and the data object.

Let's now build this model into the react page component that will host your react table.

### A - Instanciate the TableModel and give it a name :

<img src="/public/1-createmodel-2.png"/>

This model will be key in order to define the following properties :

- Which specific datas should be extracted from your data object.
- Of which types those datas are. Mandatory since it will auto-define a sorting algorithm.
- Which name should be given to your columns (your '< th >' tag content).
- Are some of your columns sortable ?

### B - Using the ColumnBuilder, you should now add some columns to your model :

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

You would then end up with the following three sortable columns table :

<img src="/public/5-tableexample.png"/>

## Step 2 - Using the Table Component

Now that your tableModel is defined, it can be passed as a Prop with your Datas Object to our Component :

<img src="/public/4-component-2.png"/>

## Subcomponents /FYI only/

All those subcomponents are integrated by default. No customization is possible at the moment.

<img src="/public/6-subcomponents.png">

## Presets and Adding the Font of your Choice

### Presets

To use a Preset, simply pass it as a Prop. Here is a list of the 4 available presets (more to come) :

##### Base Preset :

`<DatasTable tableModel={tableModel} tableDatas={tableDatas} preset={basePreset.get()}/>`

<img src="/public/basepreset.jpg">

##### LightPurple Preset :

`<DatasTable tableModel={tableModel} tableDatas={tableDatas} preset={lightPurplePreset.get()}/>`

<img src="/public/lightpurplepreset.jpg">

##### DarkGreen Preset :

`<DatasTable tableModel={tableModel} tableDatas={tableDatas} preset={darkGreenPreset.get()}/>`

<img src="/public/darkgreenpreset.jpg">

##### DarkPurple Preset :

`<DatasTable tableModel={tableModel} tableDatas={tableDatas} preset={darkPurplePreset.get()}/>`

<img src="/public/darkpurplepreset.jpg">

### Add the Font of Your Choice

To replace a preset's default font, use the setGlobalFont method and pass the desired font family value as a parameter, similar to the CSS font-family property.

`<DatasTable tableModel={tableModel} tableDatas={tableDatas} preset={darkPurplePreset.setGlobalFont("Arial").get()}/>`

## Presets Deeper Customization

### Example using the setGlobalFont & the setHoveredElementsStyle methods :

<img src="/public/customizedpreset.png">

### All Available Customization Methods

You can take any existing preset and modify some of its values through those methods :

<table>
    <thead>
        <tr>
            <th>Methods</th>
            <th>Targets</th>
            <th>Usage Example</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>setGlobalFont</td>
            <td>The Font for the Table & all its subcomponents</td>
            <td>.setGlobalFont("Arial")</td>
        </tr>
        <tr>
            <td>setBordersColors</td>
            <td>The Border Colors of the Searchbar / Dropdown depending on their states</td>
            <td>.setBorderColors({<br>
                &nbsp;&nbsp;&nbsp;_default: "#CCCCCC",<br>
                &nbsp;&nbsp;&nbsp;focus: "#0000FF" <br>
            })</td>
        </tr>
        <tr>
            <td>setSeparatorColor</td>
            <td>The Color of the last & first Separators</td>
            <td>.setSeparatorColor("#000000")</td>
        </tr>
        <tr>
            <td>setTHStyle</td>
            <td>The Table Header Style</td>
            <td>
                .setTHStyle({<br>
                    &nbsp;&nbsp;&nbsp;textColor: "#000000",<br>
                    &nbsp;&nbsp;&nbsp;background: "#FFFFFF",<br>
                    &nbsp;&nbsp;&nbsp;arrowColor: "#CCCCCC",<br>
                    &nbsp;&nbsp;&nbsp;activeArrowColor: "#0000FF"<br>
                })
            </td>
        </tr>
        <tr>
            <td>setHoveredElementsStyle</td>
            <td>The Style for the hoverable elements</td>
            <td>.setHoveredElementsStyle({<br>
                &nbsp;&nbsp;&nbsp;textColor: "#FFFFFF",<br>
                &nbsp;&nbsp;&nbsp;background: "#0000FF"<br>
            })</td>
        </tr>
        <tr>
            <td>setOddRowsStyle</td>
            <td>The Odd Rows Style</td>
            <td>.setOddRowsStyle({<br>
                &nbsp;&nbsp;&nbsp;background: "#DDDDDD",<br>
                &nbsp;&nbsp;&nbsp;separatorColor: "#BBBBBB"<br>
            })</td>
        </tr>
        <tr>
            <td>setEvenRowsStyle</td>
            <td>The Even Rows Style</td>
            <td>.setEvenRowsStyle({ <br>
                &nbsp;&nbsp;&nbsp;background: "#FFFFFF",<br>
                &nbsp;&nbsp;&nbsp;separatorColor: "#BBBBBB"<br>
            })</td>
        </tr>
    </tbody>
</table>

## Simple React example

<img src="/public/fullinit3.png">
