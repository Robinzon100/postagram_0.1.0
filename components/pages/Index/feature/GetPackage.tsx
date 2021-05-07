import { Select, Slider, Input, Spacer } from "@geist-ui/react";
import { useState, useEffect } from "react";

import { calcPrices, zones, zonesEng, zonesRus, kilogramSteps, everyZone, everyZoneEng, everyZoneRus } from "./feature.data";
import { useCookies } from 'react-cookie';





const GetPackage = ({ toggle }: { toggle: boolean }) => {
    const [cost, setCost] = useState<number>(0)
    const [kilogram, setKilogram] = useState<number>(0)
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [zoneIndex, setZoneIndex] = useState<number>(0)

    const [cookies, setCookie, removeCookie] = useCookies(['lang']);
    let currentLangZone
    let everyEveryZone = []
    switch (cookies.lang) {
        case 'eng':
            currentLangZone = zonesEng
            everyEveryZone = everyZoneEng
            break;
        case 'rus':
            currentLangZone = zonesRus
            everyEveryZone = everyZoneRus
            break;

        default:
            currentLangZone = zones
            everyEveryZone = everyZone
            break;
    }

    useEffect(() => {


        if (!currentLangZone[0][0].includes(from)) currentLangZone[1].includes(from) ? setZoneIndex(1) : setZoneIndex(2)
        if (!currentLangZone[0][0].includes(to)) currentLangZone[1].includes(to) ? setZoneIndex(1) : setZoneIndex(2)
        to == currentLangZone[0][0] && from == currentLangZone[0][0] && setZoneIndex(0)

        calculate()
    }, [to, from, kilogram])

    useEffect(() => {
        calculate()
    }, [zoneIndex])


    const sliderHandler = val => {
        setKilogram(val)
    }


    const calculate = () => {
        if (to.length > 0 && from.length > 0 && kilogram > 0) {
            let prices = calcPrices[zoneIndex]
            let finalPrice = prices[kilogramSteps.indexOf(kilogramSteps.find(kg => kg >= kilogram))]
            setCost(finalPrice)
        }
    }

    return (
        <>
            <div className="get-package">
                <div className={toggle ? "get-package_container display_package_block" : "display_package_none get-package_container"}>
                    <div className="input_from">
                        <p
                            className='f-size-p4 f-weight-r'
                            data-translation='calculator_where'>სად</p>
                        <Spacer y={0.5} />
                        <Select
                            className="get-package_inputs"
                            placeholder={from}
                            value={from}
                            onChange={(value) => {
                                setFrom(`${value}`)
                                setTo(`${currentLangZone[0][0]}`)
                            }}>
                            {everyEveryZone.map((zone, i) => (
                                <Select.Option key={i} value={zone}>
                                    <p className="f-size-p5 f-weight-r">{zone}</p>
                                </Select.Option>
                            ))}
                        </Select>
                    </div>


                    <div className="input_country">
                        <p
                            className='f-size-p4 f-weight-r'
                            data-translation='calculator_from'>საიდან</p>
                        <Spacer y={0.5} />
                        <Select
                            className="get-package_inputs"
                            placeholder={to}
                            value={to}
                            onChange={(value) => {
                                setTo(`${value}`)
                                setFrom(`${currentLangZone[0][0]}`)
                            }}>
                            {everyEveryZone.map((zone, i) => (
                                <Select.Option key={i} value={zone}>
                                    <p className="f-size-p5 f-weight-l">{zone}</p>
                                </Select.Option>
                            ))}
                        </Select>
                    </div>


                    <div className="input_kilograms">
                        <p className='f-size-p4 f-weight-r' style={{ marginBottom: '.5rem' }}>{kilogram}kg</p>
                        <Spacer y={0.5} />
                        {/* <Input
                            className="f-size-p4 f-weight-r input"
                            status="secondary"
                            size="large"
                            placeholder="წონა"
                            type='number'
                            value={`${kilogram}`}
                            onChange={(e) => setKilogram(+e.target.value)} /> */}
                        <Slider
                            step={.1}
                            style={{ width: '100%' }}
                            max={30}
                            value={kilogram}
                            onChange={sliderHandler} />
                    </div>


                    <div className="input_cost">
                        <p
                            className='f-size-p4 f-weight-r'
                            style={{ marginBottom: '.5rem' }}
                            data-translation='calculator_cost'>ხარჯი</p>
                        <Spacer y={0.6} />
                        <Input
                            value={`${cost}₾`}
                            disabled
                            width="100%"
                            className="f-size-p4 f-weight-r input"
                            status="secondary"
                            size="large"
                            placeholder="ფასი"
                        />
                    </div>

                    {/* 
                    <Button size="small" width="100%" color="yellow" className="package_search" onClick={() => handleSend()}>
                        <p className="f-size-p2 f-weight-bo">ძებნა</p>
                    </Button> */}

                </div>

            </div>

        </>
    );
};

export default GetPackage;
