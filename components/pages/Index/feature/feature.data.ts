
export const calcPrices = [
    [4, 5, 7, 10],
    [7, 9, 12, 17],
    [10, 13, 18, 20],
]

export const zones = [
    ['თბილისი'],
    ['გორი', 'ხაშური', 'ზესტაფონი', 'ქუთაისი', 'სენაკი', 'სამტრედია', 'ფოთი', 'ბათუმი', 'ბორჯომი', 'ახალციხე', 'რუსთავი', 'თელავი', 'ზუგდიდი'],
    ['ახმეტა', 'წნორი', 'დედოფლისწყარო', 'დუშეთი', 'თიანეთი', 'ყაზბეგი', 'ფასანაური', 'გუდაური', 'თეთრიწყარო', 'მანგლისი', 'წალკა', 'კასპი', 'ქარელი', 'აგარა', 'ბაკურიანი', 'წაღვერი', 'ადიგენი', 'აბასთუმანი', 'ასპინძა', 'ახალქალაქი', 'ნინოწმინდა', 'ხარაგაული', 'ტყიბული', 'საჩხერე', 'ჭიათურა', 'თერჯოლა', 'ბაღდათი', 'ვანი', 'ხონი', 'წყალტუბო', 'ამბროლაური', 'ცაგერი', 'ლენტეხი', 'ონი', 'ჩაქვი', 'ურეკი', 'მახინჯაური', 'ხელვაჩაური', 'ქედა', 'მარტვილი', 'ჩხოროწყუ', 'ხობი', 'წალენჯიხა']
]
export const zonesRus = [
    ['Тбилиси'],
    ['Гори', 'Хашури', 'Зестафони', 'Кутаиси', 'Сенаки', 'Самтредиа', 'Поти', 'Батуми', 'Боржоми', 'Ахалцихе', 'Рустави', 'Телави', ' Зугдиди'],
    ['Ахмет', 'Цнор', 'Дедоплисцкар', 'Душет', 'Тианет', 'Казбег', 'Пасанаур', 'Гудаур', 'Тетрицкар', 'Манглис', 'Цалк', 'Касп', ' Карели', ' Агара', ' Бакуриани', ' Цахвери', ' Адигени', ' Абастумани', ' Аспиндза', ' Ахалкалаки', ' Ниноцминда', ' Харагаули', ' Ткибули', ' Сачхере', ' Чиатура', 'Тержол', 'Багдат', 'Ван', 'Хон', 'Цхалтуб', 'Амбролаур', 'Цагер', 'Лентех', 'Он', 'Чакв', 'Урек', 'Махинджаур', ' Хелвачаури', ' Кеда', ' Мартвили', ' Чхороцку', ' Хоби', ' Цаленджиха']
]

export const zonesEng = [
    ['Tbilisi'],
    ['Gori', 'Khashuri', 'Zestafoni', 'Kutaisi', 'Senaki', 'Samtredia', 'Poti', 'Batumi', 'Borjomi', 'Akhaltsikhe', 'Rustavi', 'Telavi', ' Zugdidi '],
    ['Akhmeta', 'Tsnori', 'Dedoplistskaro', 'Dusheti', 'Tianeti', 'Kazbegi', 'Pasanauri', 'Gudauri', 'Tetritskaro', 'Manglisi', 'Tsalka', 'Kaspi', ' Kareli ', ' Agara ', ' Bakuriani ', ' Tsaghveri ', ' Adigeni ', ' Abastumani ', ' Aspindza ', ' Akhalkalaki ', ' Ninotsminda ', ' Kharagauli ', ' Tkibuli ', ' Sachkhere ', ' Chiatura ', 'Terjola', 'Baghdati', 'Vani', 'Khoni', 'Tskaltubo', 'Ambrolauri', 'Tsageri', 'Lentekhi', 'Oni', 'Chakvi', 'Ureki', 'Makhinjauri', ' Khelvachauri ', ' Keda ', ' Martvili ', ' Chkhorotsku ', ' Khobi ', ' Tsalenjikha ']
]


export const kilogramSteps: number[] = [3, 10, 20, 30]



export const everyZone = [...zones[0], ...zones[1], ...zones[2]].sort(Intl.Collator().compare);
export const everyZoneEng = [...zonesEng[0], ...zonesEng[1], ...zonesEng[2]].sort(Intl.Collator().compare);
export const everyZoneRus = [...zonesRus[0], ...zonesRus[1], ...zonesRus[2]].sort(Intl.Collator().compare);