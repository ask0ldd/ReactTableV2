React Table Component Package (WIP)

Forthcoming update : More Presets & An easy Way to build your own Presets.

<img src="/public/basepreset.jpg">
  
On NPM : https://www.npmjs.com/package/@asklddco/react-table
  
    
      
DOCUMENTATION
  
## Table Of Content
  
[1 - Build Your Table Model](#step-1---build-your-table-model)

[2 - Using the Table Component](#step-2---using-the-table-component)

[3 - Customization through props](#customization-through-props)

[4 - Presets & Adding the Font of your Choice ](#presets-and-adding-the-font-of-your-choice)

[5 - Presets Deeper Customization](#presets-deeper-customization)

[6 - Adding some Custom Cells & Buttons to Your Table](#adding-some-custom-cells)

[7 - Summary - Simple React Example ](#simple-react-example)

<hr>
  
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
  
<table>
<thead>
    <tr>
        <th>Builders Methods</th>
        <th>Description</th>
    </tr>
</thead>
<tbody>
    <tr><td><b>setColumnName("name")</b></td><td>We give a name to our column</td></tr>
    <tr><td><b>setColumnName("name", "align-left" | "align-center" | "align-right")</b></td><td>Overrides the default preset alignment for this TH</td></tr>
    <tr><td><b>setDatatypeAsString()</b></td><td>We define the data type that should populate my column. Here it should be populated with strings</td></tr>
    <tr><td><b>setAccessor("accessor")</b></td><td>We specifie the key in the data object associated with the value needed to fill the column</td></tr>
    <tr><td><b>SetSortability(boolean)</b></td><td>We indicate to our model if our column should be sortable or not</td></tr>
    <tr><td><b>setCustomComponent(customCell)</b></td><td>Each row of our column will contain the same custom cell (cf. "adding custom cells" section)</td></tr>
</tbody>
</table>
  
    
Here are the different methods to define your datatypes :
  
  
- setDatatypeAsString()
- setDatatypeAsNumber()
- setDatatypeAsDate()
  
  
As an example, building this model would qualify for such a data object :
  
<img src="/public/3-userdatas-4.png"/>
  
You would then end up with the following three sortable columns table :
  
<img src="/public/5-tableexample.png"/>
  
    
       
<hr>
  
## Step 2 - Using the Table Component
  
Now that your tableModel is defined, it can be passed as a Prop with your Datas Object to our Component :
  
<img src="/public/4-component-2.png"/>
  
    
      
<hr>
  
## Customization through props
  
### Defining the number of rows by default
  
`<DatasTable tableModel={tableModel} tableDatas={tableDatas} nRowsDefault={25}/>`
  
nRowsDefault possible values : [10, 25, 50, 100]
  
### Subcomponents
  
All those subcomponents are integrated by default.
  
<img src="/public/6-subcomponents.png">
  
### Hiding some Subcomponents
  
You can hide some of those subcomponents passing the following props to your Datatable component :
  
<table>
<thead>
    <tr>
        <th>Prop</th>
        <th>Value</th>
        <th>Description</th>
    </tr>
</thead>
<tbody>
    <tr><td><b>hidePagination</b></td><td>true | false : boolean</td><td>Hide both pagination components under the Table</td></tr>
    <tr><td><b>hideSearchBar</b></td><td>true | false : boolean</td><td>Hide the search component in the top right corner</td></tr>
    <tr><td><b>hideNRowsSelect</b></td><td>true | false : boolean</td><td>Hide the select component in the top left corner</td></tr>
</tbody>
</table>
  
    
      
<hr>
  
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

If the text in your cell is not vertically centered you can add some padding to fix it, use those methods of the preset class with a number of pixels as parameter :

.setRowTopPadding('numberOfPixels') & .setRowBottomPadding('numberOfPixels')

<hr>
  
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
            <td><b>setGlobalFont</b></td>
            <td>The Font for the Table & all its subcomponents</td>
            <td>.setGlobalFont("Arial")</td>
        </tr>
        <tr>
            <td><b>setBordersColors</b></td>
            <td>The Border Colors of the Searchbar<br>& the Dropdown depending on their states</td>
            <td>.setBorderColors({<br>
                &nbsp;&nbsp;&nbsp;_default: "#CCCCCC",<br>
                &nbsp;&nbsp;&nbsp;focus: "#0000FF" <br>
            })</td>
        </tr>
        <tr>
            <td><b>setSeparatorColor</b></td>
            <td>The Color of the last & first Separators</td>
            <td>.setSeparatorColor("#000000")</td>
        </tr>
        <tr>
            <td><b>setTHStyle</b></td>
            <td>The Style of the Table Header</td>
            <td>
                .setTHStyle({<br>
                    &nbsp;&nbsp;&nbsp;textColor: "#000000",<br>
                    &nbsp;&nbsp;&nbsp;textAlign: "left",<br>
                    &nbsp;&nbsp;&nbsp;background: "#FFFFFF",<br>
                    &nbsp;&nbsp;&nbsp;arrowColor: "#CCCCCC",<br>
                    &nbsp;&nbsp;&nbsp;activeArrowColor: "#0000FF"<br>
                })
            </td>
        </tr>
        <tr>
            <td><b>setHoveredElementsStyle</b></td>
            <td>The Style of the Hoverable Elements</td>
            <td>.setHoveredElementsStyle({<br>
                &nbsp;&nbsp;&nbsp;textColor: "#FFFFFF",<br>
                &nbsp;&nbsp;&nbsp;background: "#0000FF"<br>
            })</td>
        </tr>
        <tr>
            <td><b>setOddRowsStyle</b></td>
            <td>The Style of the Odd Rows</td>
            <td>.setOddRowsStyle({<br>
                &nbsp;&nbsp;&nbsp;background: "#DDDDDD",<br>
                &nbsp;&nbsp;&nbsp;separatorColor: "#BBBBBB"<br>
                &nbsp;&nbsp;&nbsp;textColor: "#BBBBBB"<br>
            })</td>
        </tr>
        <tr>
            <td><b>setEvenRowsStyle</b></td>
            <td>The Style of the Even Rows</td>
            <td>.setEvenRowsStyle({ <br>
                &nbsp;&nbsp;&nbsp;background: "#FFFFFF",<br>
                &nbsp;&nbsp;&nbsp;separatorColor: "#BBBBBB"<br>
                &nbsp;&nbsp;&nbsp;textColor: "#BBBBBB"<br>
            })</td>
        </tr>
    </tbody>
</table>
  
    
       
<hr>
  
## Adding Some Custom Cells
  
### Custom Cell Component
  
You can fill a whole column with a custom component of your choice. It's really handy when you want to add buttons to your table that can trigger custom interactions.
  
Here is an example :
  
<img src ="/public/customcomponent.png">
  
    
Notice that your component should take index and dataRow as parameters. Why? Beacause these datas will be passed to your component at render so you can use them to trigger any behavior you want.
  
    
### Building a Table with this Custom Component
  
<img src="/public/tablecustomrowcode2.png">
  
Here is how the previous example would be rendered inside your table :
  
<img src="/public/tablewithicons2.png">
  
    
       
<hr>
  
## Simple React Example
  
<img src="/public/fullinit4.png">
