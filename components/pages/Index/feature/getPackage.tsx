import { Select, Slider, Input, Spacer } from "@geist-ui/react";
import { useState, useEffect } from "react";

import { calcPrices, zones, kilogramSteps, everyZone } from "./feature.data";





const getPackage = ({ toggle }: { toggle: boolean }) => {
    const [cost, setCost] = useState<number>(0)
    const [kilogram, setKilogram] = useState<number>(0)
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [zoneIndex, setZoneIndex] = useState<number>(0)


    useEffect(() => {
        if (!zones[0][0].includes(from)) zones[1].includes(from) ? setZoneIndex(1) : setZoneIndex(2)
        if (!zones[0][0].includes(to)) zones[1].includes(to) ? setZoneIndex(1) : setZoneIndex(2)
        to == zones[0][0] && from == zones[0][0] && setZoneIndex(0)

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
            // debugger
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
                        <p className='f-size-p4 f-weight-r'>სად</p>
                        <Spacer y={0.5} />
                        <Select
                            className="get-package_inputs"
                            placeholder={from}
                            value={from}
                            onChange={(value) => {
                                setFrom(`${value}`)
                                setTo(`${zones[0][0]}`)
                            }}>
                            {everyZone.map((zone, i) => (
                                <Select.Option key={i} value={zone}>
                                    <p className="f-size-p5 f-weight-r">{zone}</p>
                                </Select.Option>
                            ))}
                        </Select>
                    </div>


                    <div className="input_country">
                        <p className='f-size-p4 f-weight-r'>საიდან</p>
                        <Spacer y={0.5} />
                        <Select
                            className="get-package_inputs"
                            placeholder={to}
                            value={to}
                            onChange={(value) => {
                                setTo(`${value}`)
                                setFrom(`${zones[0][0]}`)
                            }}>
                            {everyZone.map((zone, i) => (
                                <Select.Option key={i} value={zone}>
                                    <p className="f-size-p5 f-weight-l">{zone}</p>
                                </Select.Option>
                            ))}
                        </Select>
                    </div>


                    <div className="input_kilograms">
                        <p className='f-size-p4 f-weight-r' style={{ marginBottom: '.5rem' }}>{kilogram}კგ</p>
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
                            style={{width: '100%'}}
                            max={30}
                            value={kilogram}
                            onChange={sliderHandler} />
                    </div>


                    <div className="input_cost">
                        <p className='f-size-p4 f-weight-r' style={{ marginBottom: '.5rem' }}>ხარჯი</p>
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

export default getPackage;
