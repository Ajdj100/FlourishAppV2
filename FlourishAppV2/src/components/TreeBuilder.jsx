// function growTree(height) {
//     //create initial tree (2 triangles and a trunk)
//     //tree should be locked in aspect ration and use the width to control the size
//     let initialTree = 
// }

export default function Tree({ treeHeight = 24 }) {

    const maxGrowthForScale = 7; //max growth per layer

    // //REFACTOR
    const preCompTotal = treeHeight / maxGrowthForScale;

    let layerCount = Math.floor(preCompTotal);

    //guard
    if (layerCount == 0)
        layerCount = 1;

    const regChunkStyle = {
        width: '0px',
        height: '0px',
        borderStyle: 'solid',
        borderWidth: '0px 100px 150px 100px',
        borderColor: 'transparent transparent #376332 transparent',
        transform: 'rotate(0deg)',
        position: 'absolute'
    }
    const trunkStyle = {
        width: '30px',
        height: '30px',
        backgroundColor: '#3b2822'
    }

    //layer generator
    let layers = [];
    const layerOffset = 40

    for (var i = 0; i < layerCount; i++) {

        const offset = -layerOffset * i; //get upwards offset
        const style = { ...regChunkStyle, transform: `translateY(${offset}px)` };

        layers.push(<div key={i} className="tChunk" style={style}></div>)
    }
    console.log(layers)
    return (
        <>
            <div className="tContainer flex flex-col-reverse mx-auto items-center">
                <div className="tTrunk" style={trunkStyle}></div>
                <div className="flex flex-col-reverse mx-auto items-center">
                    {layers}
                </div>
            </div>
        </>
    )
}