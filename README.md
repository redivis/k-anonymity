# [Redivis labs geo coverage visualizer](https://labs.redivis.com/geo-coverage)
## Overview
Determine access to resources within a geographic region based on road network travel times
![Screenshot of tool](/assets/screenshot.png)

## Usage
1. Upload your tabular data for visualization to Redivis. [Consult the "Creating a dataset guide" for full documentation.](https://docs.redivis.com/guides/creating-a-dataset)
    - At the least, your table should contain one column (variable) for latitude and one for longitude.
1. Navigate to the visualizer at https://labs.redivis.com/geo-visualizer
1. Sign in to your Redivis account by clicking the "Sign in to Redivis" button at top right
1. Next, in the left toolbar:
    1. Specify your data by providing your username, the name of the dataset you created, and the name of the relevant table
        - You can reference any table that you have access to, including those owned by other users/organizations or tables created in a [project](https://docs.redivis.com/reference/projects).
    1. Choose the country within which to perform the coverage analysis, optionally specifying a subregion within that country.
        - For example, to perform an analysis of California, you should choose "United States" as the country and specify "California" as the subregion.
    1. Specify the variables in your table that correspond to the latitude/longitude
1. Finally, customize your analysis:
    1. You can select additional road layers for a more robust analysis
        - For larger or highly developed regions, you may be limited to only the largest roads due to performance limitations of OpenStreetMap
    1. Modify the coverage time to see how the covered population changes
    1. Etc...


## Common issues
- OpenStreetMap

## Methodology
This tool uses OpenStreetMap (OSM) data for road networks and country boundaries. Population density data are from WorldPop (2010)
(...more coming soon)

## Citation
TODO

## Advanced
### Local Development
- clone this repository
- npm start
- open http://localhost:8080

### Dev-ops
- Any pushes to the `main` branch will trigger a Github action to build assets and deploy to the `gh-pages` branch