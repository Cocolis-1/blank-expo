import { Camera, Image, Images, MapView, setAccessToken, ShapeSource, SymbolLayer } from '@rnmapbox/maps';
import { View } from 'react-native';
import { useEffect, useMemo } from 'react';
import { feature, featureCollection } from '@turf/turf';

export const Map = () => {
    const source = useMemo(() => {
        return featureCollection([
            feature({
                coordinates: [3.0573, 50.6292],
                type: 'Point'
            })
        ]);
    }, []);

    useEffect(() => {
        (async () => {
            await setAccessToken('[MAPBOX_TOKEN]');
        })();
    });

    return (
        <MapView
            style={{
                height: '100%',
                width: '100%'
            }}
        >
            <Camera centerCoordinate={[3.0573, 50.6292]} />
            <Images>
                <Image name="pin" content={[8, 4, 100 - 8, 50 - 4]} stretchX={[[8, 100 - 8]]} stretchY={[[4, 50 - 4]]}>
                    <View
                        style={{
                            height: 50,
                            width: 100,
                            backgroundColor: 'red',
                            borderRadius: 8
                        }}
                    />
                </Image>
            </Images>
            <ShapeSource id="pins-souce" shape={source as any}>
                <SymbolLayer
                    id="stretchable-pins"
                    sourceID="pins-source"
                    style={{
                        textField: 'hello',
                        textSize: 14,
                        textColor: '#000',
                        iconAllowOverlap: true,
                        textAllowOverlap: true,
                        iconImage: 'pin',
                        iconTextFit: 'both'
                    }}
                />
            </ShapeSource>
        </MapView>
    );
};
