import { Select, Slider, Input, Spacer } from "@geist-ui/react";
import { useState, useEffect } from "react";


interface Package {
    toggle: boolean
}




const getPackage = ({ toggle }: Package) => {
    const [cost, setCost] = useState<number>(0)
    const [kilogram, setKilogram] = useState<number>(0)
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [zoneIndex, setZoneIndex] = useState<number>(0)


    const calcPrices = [
        [
            4,
            5,
            7,
            10
        ],
        [
            7,
            9,
            12,
            17
        ],
        [
            10,
            13,
            18,
            20
        ],
    ]

    const zones = [
        ['თბილისი'],
        ["გორი", "ხაშური", "ზესტაფონი", "ქუთაისი", "სენაკი", "სამტრედია", "ფოთი", "ბათუმი", "ბორჯომი", "ახალციხე", "რუსთავი", "თელავი", "ზუგდიდი"],
        ["ახმეტა", "წნორი", "დედოფლისწყარო", "დუშეთი", "თიანეთი", "ყაზბეგი", "ფასანაური", "გუდაური", "თეთრიწყარო", "მანგლისი", "წალკა", "კასპი", "ქარელი", "აგარა", "ბაკურიანი", "წაღვერი", "ადიგენი", "აბასთუმანი", "ასპინძა", "ახალქალაქი", "ნინოწმინდა", "ხარაგაული", "ტყიბული", "საჩხერე", "ჭიათურა", "თერჯოლა", "ბაღდათი", "ვანი", "ხონი", "წყალტუბო", "ამბროლაური", "ცაგერი", "ლენტეხი", "ონი", "ჩაქვი", "ურეკი", "მახინჯაური", "ხელვაჩაური", "ქედა", "მარტვილი", "ჩხოროწყუ", "ხობი", "წალენჯიხა"]
    ]


    const kilogramSteps: number[] = [3, 10, 20, 30]



    const everyZone = [...zones[0], ...zones[1], ...zones[2]].sort(Intl.Collator().compare);


    useEffect(() => {
        if (!zones[0][0].includes(from)) {
            zones[1].includes(from) ? setZoneIndex(1) : setZoneIndex(2)
        }
        if (!zones[0][0].includes(to)) {
            zones[1].includes(to) ? setZoneIndex(1) : setZoneIndex(2)
        }

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
                        <Slider
                            step={.1}
                            max={30}

                            onChange={sliderHandler} />
                    </div>


                    <div className="input_cost">
                        <p className='f-size-p4 f-weight-r' style={{ marginBottom: '.5rem' }}>ხარჯი</p>
                        <Spacer y={0.6} />
                        <Input
                            value={`${cost}₾`}
                            disabled={true}
                            width="100%"
                            className="input"
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
