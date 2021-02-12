const regions = [
	{
		country_name: 'Afghanistan',
		province_name: 'Farah Province',
	},
	{
		country_name: 'Afghanistan',
		province_name: 'Logar Province',
	},
	{
		country_name: 'Afghanistan',
		province_name: 'Khost Province',
	},
	{
		country_name: 'Afghanistan',
		province_name: 'Baghlan Province',
	},
	{
		country_name: 'Afghanistan',
		province_name: 'Paktia Province',
	},
	{
		country_name: 'Afghanistan',
		province_name: 'Kunduz Province',
	},
	{
		country_name: 'Afghanistan',
		province_name: 'Urōzgān',
	},
	{
		country_name: 'Afghanistan',
		province_name: 'Kapisa Province',
	},
	{
		country_name: 'Afghanistan',
		province_name: 'Balkh Province',
	},
	{
		country_name: 'Afghanistan',
		province_name: 'Jowzjan Province',
	},
	{
		country_name: 'Afghanistan',
		province_name: 'Badghis',
	},
	{
		country_name: 'Afghanistan',
		province_name: 'Laghman Province',
	},
	{
		country_name: 'Afghanistan',
		province_name: 'Bamyan',
	},
	{
		country_name: 'Afghanistan',
		province_name: 'Ghor',
	},
	{
		country_name: 'Afghanistan',
		province_name: 'Kunar Province',
	},
	{
		country_name: 'Afghanistan',
		province_name: 'Takhar Province',
	},
	{
		country_name: 'Afghanistan',
		province_name: 'Maidan Wardak',
	},
	{
		country_name: 'Afghanistan',
		province_name: 'Nuristan Province',
	},
	{
		country_name: 'Afghanistan',
		province_name: 'Panjshir Province',
	},
	{
		country_name: 'Afghanistan',
		province_name: 'Nangarhar Province',
	},
	{
		country_name: 'Afghanistan',
		province_name: 'Faryab',
	},
	{
		country_name: 'Afghanistan',
		province_name: 'Daykundi',
	},
	{
		country_name: 'Afghanistan',
		province_name: 'Paktika Province',
	},
	{
		country_name: 'Afghanistan',
		province_name: 'Kandahar',
	},
	{
		country_name: 'Afghanistan',
		province_name: 'Nimruz Province',
	},
	{
		country_name: 'Afghanistan',
		province_name: 'Kabul Province',
	},
	{
		country_name: 'Afghanistan',
		province_name: 'Ghazni Province',
	},
	{
		country_name: 'Afghanistan',
		province_name: 'Sar-e Pol Province',
	},
	{
		country_name: 'Afghanistan',
		province_name: 'Zabul Province',
	},
	{
		country_name: 'Afghanistan',
		province_name: 'Badakhshan Province',
	},
	{
		country_name: 'Afghanistan',
		province_name: 'Parwan Province',
	},
	{
		country_name: 'Afghanistan',
		province_name: 'Samangan',
	},
	{
		country_name: 'Afghanistan',
		province_name: 'Helmand',
	},
	{
		country_name: 'Albania',
		province_name: 'Northern Albania',
	},
	{
		country_name: 'Albania',
		province_name: 'Southern Albania',
	},
	{
		country_name: 'Albania',
		province_name: 'Central Albania',
	},
	{
		country_name: 'Algeria',
		province_name: 'Tipaza',
	},
	{
		country_name: 'Algeria',
		province_name: 'Beni Abbes',
	},
	{
		country_name: 'Algeria',
		province_name: 'Saïda',
	},
	{
		country_name: 'Algeria',
		province_name: 'Oum El Bouaghi',
	},
	{
		country_name: 'Algeria',
		province_name: 'Ouled Djellal',
	},
	{
		country_name: 'Algeria',
		province_name: 'Mila',
	},
	{
		country_name: 'Algeria',
		province_name: 'Relizane',
	},
	{
		country_name: 'Algeria',
		province_name: 'Aïn Defla',
	},
	{
		country_name: 'Algeria',
		province_name: 'Ouargla',
	},
	{
		country_name: 'Algeria',
		province_name: 'Djelfa',
	},
	{
		country_name: 'Algeria',
		province_name: 'Tébessa',
	},
	{
		country_name: 'Algeria',
		province_name: 'Jijel',
	},
	{
		country_name: 'Algeria',
		province_name: 'Mostaganem',
	},
	{
		country_name: 'Algeria',
		province_name: 'Tamanrasset',
	},
	{
		country_name: 'Algeria',
		province_name: 'Skikda',
	},
	{
		country_name: 'Algeria',
		province_name: 'El Tarf',
	},
	{
		country_name: 'Algeria',
		province_name: 'Tissemsilt',
	},
	{
		country_name: 'Algeria',
		province_name: 'Setif',
	},
	{
		country_name: 'Algeria',
		province_name: 'Biskra',
	},
	{
		country_name: 'Algeria',
		province_name: 'Guelma',
	},
	{
		country_name: 'Algeria',
		province_name: "El M'Ghair",
	},
	{
		country_name: 'Algeria',
		province_name: 'Chlef',
	},
	{
		country_name: 'Algeria',
		province_name: "M'Sila",
	},
	{
		country_name: 'Algeria',
		province_name: 'El Bayadh',
	},
	{
		country_name: 'Algeria',
		province_name: 'Djanet',
	},
	{
		country_name: 'Algeria',
		province_name: 'Bejaia',
	},
	{
		country_name: 'Algeria',
		province_name: 'Boumerdès',
	},
	{
		country_name: 'Algeria',
		province_name: 'Tiaret',
	},
	{
		country_name: 'Algeria',
		province_name: 'Ghardaia',
	},
	{
		country_name: 'Algeria',
		province_name: 'Bordj Bou Arreridj',
	},
	{
		country_name: 'Algeria',
		province_name: 'Oran',
	},
	{
		country_name: 'Algeria',
		province_name: 'Blida',
	},
	{
		country_name: 'Algeria',
		province_name: 'Illizi',
	},
	{
		country_name: 'Algeria',
		province_name: 'Adrar',
	},
	{
		country_name: 'Algeria',
		province_name: 'Sidi Bel Abbès',
	},
	{
		country_name: 'Algeria',
		province_name: 'Laghouat',
	},
	{
		country_name: 'Algeria',
		province_name: 'Bashar',
	},
	{
		country_name: 'Algeria',
		province_name: 'Khenchela',
	},
	{
		country_name: 'Algeria',
		province_name: 'El Oued',
	},
	{
		country_name: 'Algeria',
		province_name: 'Souk Ahras',
	},
	{
		country_name: 'Algeria',
		province_name: 'Timimoune',
	},
	{
		country_name: 'Algeria',
		province_name: 'Tinduf',
	},
	{
		country_name: 'Algeria',
		province_name: 'Annaba',
	},
	{
		country_name: 'Algeria',
		province_name: 'Tilimsen',
	},
	{
		country_name: 'Algeria',
		province_name: 'Batna',
	},
	{
		country_name: 'Algeria',
		province_name: 'Aïn Témouchent',
	},
	{
		country_name: 'Algeria',
		province_name: 'Médéa',
	},
	{
		country_name: 'Algeria',
		province_name: 'Constantine',
	},
	{
		country_name: 'Algeria',
		province_name: 'Algiers',
	},
	{
		country_name: 'Algeria',
		province_name: 'Naâma',
	},
	{
		country_name: 'Algeria',
		province_name: 'Touggourt',
	},
	{
		country_name: 'Algeria',
		province_name: 'In Salah',
	},
	{
		country_name: 'Algeria',
		province_name: 'Bordj Badji Mokhtar',
	},
	{
		country_name: 'Algeria',
		province_name: 'Mascara',
	},
	{
		country_name: 'Algeria',
		province_name: 'In Guezzam',
	},
	{
		country_name: 'Algeria',
		province_name: 'Bouira',
	},
	{
		country_name: 'Algeria',
		province_name: 'El Menia',
	},
	{
		country_name: 'Algeria',
		province_name: 'Tizi Ouzou',
	},
	{
		country_name: 'Angola',
		province_name: 'Huíla',
	},
	{
		country_name: 'Angola',
		province_name: 'Namibe',
	},
	{
		country_name: 'Angola',
		province_name: 'Malanje',
	},
	{
		country_name: 'Angola',
		province_name: 'Lunda Norte',
	},
	{
		country_name: 'Angola',
		province_name: 'Benguela',
	},
	{
		country_name: 'Angola',
		province_name: 'Bengo',
	},
	{
		country_name: 'Angola',
		province_name: 'Zaire',
	},
	{
		country_name: 'Angola',
		province_name: 'Uíge',
	},
	{
		country_name: 'Angola',
		province_name: 'Cabinda',
	},
	{
		country_name: 'Angola',
		province_name: 'Luanda Province',
	},
	{
		country_name: 'Angola',
		province_name: 'Cunene',
	},
	{
		country_name: 'Angola',
		province_name: 'Bié',
	},
	{
		country_name: 'Angola',
		province_name: 'Cuando Cubango',
	},
	{
		country_name: 'Angola',
		province_name: 'Lunda Sul',
	},
	{
		country_name: 'Angola',
		province_name: 'Moxico',
	},
	{
		country_name: 'Angola',
		province_name: 'Huambo',
	},
	{
		country_name: 'Angola',
		province_name: 'Cuanza Sul',
	},
	{
		country_name: 'Antigua and Barbuda',
		province_name: 'Redonda',
	},
	{
		country_name: 'Antigua and Barbuda',
		province_name: 'Barbuda',
	},
	{
		country_name: 'Argentina',
		province_name: 'Río Negro Province',
	},
	{
		country_name: 'Argentina',
		province_name: 'Catamarca',
	},
	{
		country_name: 'Argentina',
		province_name: 'Córdoba',
	},
	{
		country_name: 'Argentina',
		province_name: 'Santiago del Estero',
	},
	{
		country_name: 'Argentina',
		province_name: 'Chaco',
	},
	{
		country_name: 'Argentina',
		province_name: 'Formosa',
	},
	{
		country_name: 'Argentina',
		province_name: 'Santa Fe',
	},
	{
		country_name: 'Argentina',
		province_name: 'Mendoza',
	},
	{
		country_name: 'Argentina',
		province_name: 'Jujuy',
	},
	{
		country_name: 'Argentina',
		province_name: 'Tucumán',
	},
	{
		country_name: 'Argentina',
		province_name: 'Chubut',
	},
	{
		country_name: 'Argentina',
		province_name: 'La Pampa',
	},
	{
		country_name: 'Argentina',
		province_name: 'San Luis',
	},
	{
		country_name: 'Argentina',
		province_name: 'Santa Cruz Province, Argentina',
	},
	{
		country_name: 'Argentina',
		province_name: 'La Rioja',
	},
	{
		country_name: 'Argentina',
		province_name: 'Autonomous City of Buenos Aires',
	},
	{
		country_name: 'Argentina',
		province_name: 'San Juan',
	},
	{
		country_name: 'Argentina',
		province_name: 'Salta',
	},
	{
		country_name: 'Argentina',
		province_name: 'Misiones',
	},
	{
		country_name: 'Argentina',
		province_name: 'Neuquén Province',
	},
	{
		country_name: 'Argentina',
		province_name: 'Buenos Aires',
	},
	{
		country_name: 'Argentina',
		province_name: 'Tierra del Fuego Province',
	},
	{
		country_name: 'Armenia',
		province_name: 'Kotayk Province',
	},
	{
		country_name: 'Armenia',
		province_name: 'Aragatsotn Province',
	},
	{
		country_name: 'Armenia',
		province_name: 'Syunik Province',
	},
	{
		country_name: 'Armenia',
		province_name: 'Tavush Province',
	},
	{
		country_name: 'Armenia',
		province_name: 'Ararat Province',
	},
	{
		country_name: 'Armenia',
		province_name: 'Lori Province',
	},
	{
		country_name: 'Armenia',
		province_name: 'Armavir Province',
	},
	{
		country_name: 'Armenia',
		province_name: 'Gegharkunik Province',
	},
	{
		country_name: 'Armenia',
		province_name: 'Vayots Dzor Province',
	},
	{
		country_name: 'Armenia',
		province_name: 'Shirak Province',
	},
	{
		country_name: 'Armenia',
		province_name: 'Yerevan',
	},
	{
		country_name: 'Australia',
		province_name: 'Australian Capital Territory',
	},
	{
		country_name: 'Australia',
		province_name: 'Victoria',
	},
	{
		country_name: 'Australia',
		province_name: 'Northern Territory',
	},
	{
		country_name: 'Australia',
		province_name: 'Ashmore and Cartier Islands',
	},
	{
		country_name: 'Australia',
		province_name: 'South Australia',
	},
	{
		country_name: 'Australia',
		province_name: 'Coral Sea Islands',
	},
	{
		country_name: 'Australia',
		province_name: 'Western Australia',
	},
	{
		country_name: 'Australia',
		province_name: 'New South Wales',
	},
	{
		country_name: 'Australia',
		province_name: 'Norfolk Island',
	},
	{
		country_name: 'Australia',
		province_name: 'Jervis Bay Territory',
	},
	{
		country_name: 'Australia',
		province_name: 'Heard Island and McDonald Islands',
	},
	{
		country_name: 'Australia',
		province_name: 'Queensland',
	},
	{
		country_name: 'Australia',
		province_name: 'Tasmania',
	},
	{
		country_name: 'Australia',
		province_name: 'Cocos (Keeling) Islands',
	},
	{
		country_name: 'Australia',
		province_name: 'Christmas Island',
	},
	{
		country_name: 'Austria',
		province_name: 'Carinthia',
	},
	{
		country_name: 'Austria',
		province_name: 'Upper Austria',
	},
	{
		country_name: 'Austria',
		province_name: 'Lower Austria',
	},
	{
		country_name: 'Austria',
		province_name: 'Vienna',
	},
	{
		country_name: 'Austria',
		province_name: 'Vorarlberg',
	},
	{
		country_name: 'Austria',
		province_name: 'Tyrol',
	},
	{
		country_name: 'Austria',
		province_name: 'Salzburg',
	},
	{
		country_name: 'Austria',
		province_name: 'Styria',
	},
	{
		country_name: 'Austria',
		province_name: 'Burgenland',
	},
	{
		country_name: 'Azerbaijan',
		province_name: 'Shushi Region',
	},
	{
		country_name: 'Azerbaijan',
		province_name: 'Absheron',
	},
	{
		country_name: 'Azerbaijan',
		province_name: 'Ganja-Qazakh',
	},
	{
		country_name: 'Azerbaijan',
		province_name: 'Lankaran',
	},
	{
		country_name: 'Azerbaijan',
		province_name: 'Quba-Khachmaz',
	},
	{
		country_name: 'Azerbaijan',
		province_name: 'Stepanakert',
	},
	{
		country_name: 'Azerbaijan',
		province_name: 'Mountainous Shirvan',
	},
	{
		country_name: 'Azerbaijan',
		province_name: 'Sheki-Zaqatala',
	},
	{
		country_name: 'Azerbaijan',
		province_name: 'Upper Karabakh',
	},
	{
		country_name: 'Azerbaijan',
		province_name: 'Kalbajar-Lachin',
	},
	{
		country_name: 'Azerbaijan',
		province_name: 'Aran',
	},
	{
		country_name: 'Azerbaijan',
		province_name: 'Askeran Region',
	},
	{
		country_name: 'Azerbaijan',
		province_name: 'Martakert Region',
	},
	{
		country_name: 'Azerbaijan',
		province_name: 'Martuni Province',
	},
	{
		country_name: 'Bahrain',
		province_name: 'Northern Governorate',
	},
	{
		country_name: 'Bahrain',
		province_name: 'Muharraq Governorate',
	},
	{
		country_name: 'Bahrain',
		province_name: 'Southern Governorate',
	},
	{
		country_name: 'Bahrain',
		province_name: 'Capital Governorate',
	},
	{
		country_name: 'Bangladesh',
		province_name: 'Dhaka Division',
	},
	{
		country_name: 'Bangladesh',
		province_name: 'Kishoreganj District',
	},
	{
		country_name: 'Bangladesh',
		province_name: 'Barishal Division',
	},
	{
		country_name: 'Bangladesh',
		province_name: 'Sylhet Division',
	},
	{
		country_name: 'Bangladesh',
		province_name: 'Rangpur Division',
	},
	{
		country_name: 'Bangladesh',
		province_name: 'Mymensingh Division',
	},
	{
		country_name: 'Bangladesh',
		province_name: 'Rajshahi Division',
	},
	{
		country_name: 'Bangladesh',
		province_name: 'Chattogram Division',
	},
	{
		country_name: 'Bangladesh',
		province_name: 'Khulna Division',
	},
	{
		country_name: 'Belarus',
		province_name: 'Minsk Region',
	},
	{
		country_name: 'Belarus',
		province_name: 'Brest Region',
	},
	{
		country_name: 'Belarus',
		province_name: 'Minsk',
	},
	{
		country_name: 'Belarus',
		province_name: 'Vitsebsk Region',
	},
	{
		country_name: 'Belarus',
		province_name: 'Hrodna Region',
	},
	{
		country_name: 'Belarus',
		province_name: 'Mahilyow Region',
	},
	{
		country_name: 'Belarus',
		province_name: 'Homyel Region',
	},
	{
		country_name: 'Belgium',
		province_name: 'Wallonia',
	},
	{
		country_name: 'Belgium',
		province_name: 'Flanders',
	},
	{
		country_name: 'Belgium',
		province_name: 'Brussels-Capital',
	},
	{
		country_name: 'Belize',
		province_name: 'Toledo',
	},
	{
		country_name: 'Belize',
		province_name: 'Stann Creek',
	},
	{
		country_name: 'Belize',
		province_name: 'Orange Walk',
	},
	{
		country_name: 'Belize',
		province_name: 'Corozal',
	},
	{
		country_name: 'Belize',
		province_name: 'Belize District',
	},
	{
		country_name: 'Belize',
		province_name: 'Cayo',
	},
	{
		country_name: 'Benin',
		province_name: 'Plateau',
	},
	{
		country_name: 'Benin',
		province_name: 'Littoral',
	},
	{
		country_name: 'Benin',
		province_name: 'Zou',
	},
	{
		country_name: 'Benin',
		province_name: 'Collines',
	},
	{
		country_name: 'Benin',
		province_name: 'Atakora',
	},
	{
		country_name: 'Benin',
		province_name: 'Borgou',
	},
	{
		country_name: 'Benin',
		province_name: 'Mono',
	},
	{
		country_name: 'Benin',
		province_name: 'Donga',
	},
	{
		country_name: 'Benin',
		province_name: 'Kouffo',
	},
	{
		country_name: 'Benin',
		province_name: 'Ouémé',
	},
	{
		country_name: 'Benin',
		province_name: 'Alibori',
	},
	{
		country_name: 'Benin',
		province_name: 'Atlantique',
	},
	{
		country_name: 'Bhutan',
		province_name: 'Lhuntse District',
	},
	{
		country_name: 'Bhutan',
		province_name: 'Pemagatshel District',
	},
	{
		country_name: 'Bhutan',
		province_name: 'Sarpang District',
	},
	{
		country_name: 'Bhutan',
		province_name: 'Gasa District',
	},
	{
		country_name: 'Bhutan',
		province_name: 'Merag-Sagteng',
	},
	{
		country_name: 'Bhutan',
		province_name: 'Trashigang District',
	},
	{
		country_name: 'Bhutan',
		province_name: 'Samtse District',
	},
	{
		country_name: 'Bhutan',
		province_name: 'Trongsa District',
	},
	{
		country_name: 'Bhutan',
		province_name: 'Mongar District',
	},
	{
		country_name: 'Bhutan',
		province_name: 'Dagana District',
	},
	{
		country_name: 'Bhutan',
		province_name: 'Samdrup Jongkhar District',
	},
	{
		country_name: 'Bhutan',
		province_name: 'Tsirang District',
	},
	{
		country_name: 'Bhutan',
		province_name: 'Thimphu District',
	},
	{
		country_name: 'Bhutan',
		province_name: 'Bumthang District',
	},
	{
		country_name: 'Bhutan',
		province_name: 'Chukha District',
	},
	{
		country_name: 'Bhutan',
		province_name: 'Zhemgang District',
	},
	{
		country_name: 'Bhutan',
		province_name: 'Haa District',
	},
	{
		country_name: 'Bhutan',
		province_name: 'Paro District',
	},
	{
		country_name: 'Bhutan',
		province_name: 'Punakha District',
	},
	{
		country_name: 'Bhutan',
		province_name: 'Wangdue Phodrang District',
	},
	{
		country_name: 'Bolivia',
		province_name: 'Potosí',
	},
	{
		country_name: 'Bolivia',
		province_name: 'La Paz',
	},
	{
		country_name: 'Bolivia',
		province_name: 'Chuquisaca',
	},
	{
		country_name: 'Bolivia',
		province_name: 'Oruro',
	},
	{
		country_name: 'Bolivia',
		province_name: 'Cochabamba',
	},
	{
		country_name: 'Bolivia',
		province_name: 'Tarija',
	},
	{
		country_name: 'Bolivia',
		province_name: 'Pando',
	},
	{
		country_name: 'Bolivia',
		province_name: 'El Beni',
	},
	{
		country_name: 'Bolivia',
		province_name: 'Santa Cruz',
	},
	{
		country_name: 'Bosnia and Herzegovina',
		province_name: 'Federation of Bosnia and Herzegovina',
	},
	{
		country_name: 'Bosnia and Herzegovina',
		province_name: 'Brčko District',
	},
	{
		country_name: 'Bosnia and Herzegovina',
		province_name: 'Republika Srpska',
	},
	{
		country_name: 'Botswana',
		province_name: 'Kgalagadi District',
	},
	{
		country_name: 'Botswana',
		province_name: 'North-West District',
	},
	{
		country_name: 'Botswana',
		province_name: 'North-East District',
	},
	{
		country_name: 'Botswana',
		province_name: 'Ghanzi District',
	},
	{
		country_name: 'Botswana',
		province_name: 'Chobe District',
	},
	{
		country_name: 'Botswana',
		province_name: 'South-East District',
	},
	{
		country_name: 'Botswana',
		province_name: 'Central District',
	},
	{
		country_name: 'Botswana',
		province_name: 'Kgatleng District',
	},
	{
		country_name: 'Botswana',
		province_name: 'Kweneng District',
	},
	{
		country_name: 'Botswana',
		province_name: 'Southern District',
	},
	{
		country_name: 'Brazil',
		province_name: 'Bahia',
	},
	{
		country_name: 'Brazil',
		province_name: 'Mato Grosso',
	},
	{
		country_name: 'Brazil',
		province_name: 'Pernambuco',
	},
	{
		country_name: 'Brazil',
		province_name: 'Mato Grosso do Sul',
	},
	{
		country_name: 'Brazil',
		province_name: 'Rio Grande do Norte',
	},
	{
		country_name: 'Brazil',
		province_name: 'Santa Catarina',
	},
	{
		country_name: 'Brazil',
		province_name: 'Amapá',
	},
	{
		country_name: 'Brazil',
		province_name: 'Alagoas',
	},
	{
		country_name: 'Brazil',
		province_name: 'Minas Gerais',
	},
	{
		country_name: 'Brazil',
		province_name: 'Ceará',
	},
	{
		country_name: 'Brazil',
		province_name: 'Federal District',
	},
	{
		country_name: 'Brazil',
		province_name: 'São Paulo',
	},
	{
		country_name: 'Brazil',
		province_name: 'Pará',
	},
	{
		country_name: 'Brazil',
		province_name: 'Rio Grande do Sul',
	},
	{
		country_name: 'Brazil',
		province_name: 'Paraíba',
	},
	{
		country_name: 'Brazil',
		province_name: 'Rio de Janeiro',
	},
	{
		country_name: 'Brazil',
		province_name: 'Piauí',
	},
	{
		country_name: 'Brazil',
		province_name: 'Amazonas',
	},
	{
		country_name: 'Brazil',
		province_name: 'Roraima',
	},
	{
		country_name: 'Brazil',
		province_name: 'Goiás',
	},
	{
		country_name: 'Brazil',
		province_name: 'Tocantins',
	},
	{
		country_name: 'Brazil',
		province_name: 'Sergipe',
	},
	{
		country_name: 'Brazil',
		province_name: 'Espírito Santo',
	},
	{
		country_name: 'Brazil',
		province_name: 'Rondônia',
	},
	{
		country_name: 'Brazil',
		province_name: 'Maranhão',
	},
	{
		country_name: 'Brazil',
		province_name: 'Paraná',
	},
	{
		country_name: 'Brazil',
		province_name: 'Acre',
	},
	{
		country_name: 'Brunei',
		province_name: 'Belait District',
	},
	{
		country_name: 'Brunei',
		province_name: 'Temburong District',
	},
	{
		country_name: 'Brunei',
		province_name: 'Tutong District',
	},
	{
		country_name: 'Brunei',
		province_name: 'Brunei-Muara District',
	},
	{
		country_name: 'Bulgaria',
		province_name: 'Kardzhali',
	},
	{
		country_name: 'Bulgaria',
		province_name: 'Burgas',
	},
	{
		country_name: 'Bulgaria',
		province_name: 'Haskovo',
	},
	{
		country_name: 'Bulgaria',
		province_name: 'Stara Zagora',
	},
	{
		country_name: 'Bulgaria',
		province_name: 'Pleven',
	},
	{
		country_name: 'Bulgaria',
		province_name: 'Pazardzhik',
	},
	{
		country_name: 'Bulgaria',
		province_name: 'Sofia',
	},
	{
		country_name: 'Bulgaria',
		province_name: 'Varna',
	},
	{
		country_name: 'Bulgaria',
		province_name: 'Ruse',
	},
	{
		country_name: 'Bulgaria',
		province_name: 'Targovishte',
	},
	{
		country_name: 'Bulgaria',
		province_name: 'Sofia-City',
	},
	{
		country_name: 'Bulgaria',
		province_name: 'Gabrovo',
	},
	{
		country_name: 'Bulgaria',
		province_name: 'Smolyan',
	},
	{
		country_name: 'Bulgaria',
		province_name: 'Dobrich',
	},
	{
		country_name: 'Bulgaria',
		province_name: 'Shumen',
	},
	{
		country_name: 'Bulgaria',
		province_name: 'Kyustendil',
	},
	{
		country_name: 'Bulgaria',
		province_name: 'Plovdiv',
	},
	{
		country_name: 'Bulgaria',
		province_name: 'Blagoevgrad',
	},
	{
		country_name: 'Bulgaria',
		province_name: 'Veliko Tarnovo',
	},
	{
		country_name: 'Bulgaria',
		province_name: 'Vratsa',
	},
	{
		country_name: 'Bulgaria',
		province_name: 'Yambol',
	},
	{
		country_name: 'Bulgaria',
		province_name: 'Sliven',
	},
	{
		country_name: 'Bulgaria',
		province_name: 'Lovech',
	},
	{
		country_name: 'Bulgaria',
		province_name: 'Vidin',
	},
	{
		country_name: 'Bulgaria',
		province_name: 'Pernik',
	},
	{
		country_name: 'Bulgaria',
		province_name: 'Silistra',
	},
	{
		country_name: 'Bulgaria',
		province_name: 'Razgrad',
	},
	{
		country_name: 'Bulgaria',
		province_name: 'Montana',
	},
	{
		country_name: 'Burkina Faso',
		province_name: 'East',
	},
	{
		country_name: 'Burkina Faso',
		province_name: 'Central-Plateau',
	},
	{
		country_name: 'Burkina Faso',
		province_name: 'North',
	},
	{
		country_name: 'Burkina Faso',
		province_name: 'Central-North',
	},
	{
		country_name: 'Burkina Faso',
		province_name: 'Central-East',
	},
	{
		country_name: 'Burkina Faso',
		province_name: 'Central-South',
	},
	{
		country_name: 'Burkina Faso',
		province_name: 'Upper-Basins',
	},
	{
		country_name: 'Burkina Faso',
		province_name: 'Sahel',
	},
	{
		country_name: 'Burkina Faso',
		province_name: 'Boucle du Mouhoun',
	},
	{
		country_name: 'Burkina Faso',
		province_name: 'Central-West',
	},
	{
		country_name: 'Burkina Faso',
		province_name: 'Southwest',
	},
	{
		country_name: 'Burkina Faso',
		province_name: 'Waterfalls',
	},
	{
		country_name: 'Burkina Faso',
		province_name: 'Centre',
	},
	{
		country_name: 'Burundi',
		province_name: 'Gitega',
	},
	{
		country_name: 'Burundi',
		province_name: 'Bururi',
	},
	{
		country_name: 'Burundi',
		province_name: 'Ngozi',
	},
	{
		country_name: 'Burundi',
		province_name: 'Bujumbura Rural',
	},
	{
		country_name: 'Burundi',
		province_name: 'Makamba',
	},
	{
		country_name: 'Burundi',
		province_name: 'Muramvya',
	},
	{
		country_name: 'Burundi',
		province_name: 'Cankuzo',
	},
	{
		country_name: 'Burundi',
		province_name: 'Muyinga',
	},
	{
		country_name: 'Burundi',
		province_name: 'Bujumbura Mairie',
	},
	{
		country_name: 'Burundi',
		province_name: 'Ruyigi',
	},
	{
		country_name: 'Burundi',
		province_name: 'Karuzi',
	},
	{
		country_name: 'Burundi',
		province_name: 'Rumonge',
	},
	{
		country_name: 'Burundi',
		province_name: 'Rutana',
	},
	{
		country_name: 'Burundi',
		province_name: 'Cibitoke',
	},
	{
		country_name: 'Burundi',
		province_name: 'Bubanza',
	},
	{
		country_name: 'Burundi',
		province_name: 'Mwaro',
	},
	{
		country_name: 'Burundi',
		province_name: 'Kayanza',
	},
	{
		country_name: 'Burundi',
		province_name: 'Kirundo',
	},
	{
		country_name: 'Cambodia',
		province_name: 'Stung Treng',
	},
	{
		country_name: 'Cambodia',
		province_name: 'Kandal',
	},
	{
		country_name: 'Cambodia',
		province_name: 'Kampong Cham',
	},
	{
		country_name: 'Cambodia',
		province_name: 'Kratie',
	},
	{
		country_name: 'Cambodia',
		province_name: 'Ratanakiri',
	},
	{
		country_name: 'Cambodia',
		province_name: 'Khaet Preah Sihanouk',
	},
	{
		country_name: 'Cambodia',
		province_name: 'Svay Rieng',
	},
	{
		country_name: 'Cambodia',
		province_name: 'Pailin',
	},
	{
		country_name: 'Cambodia',
		province_name: 'Phnom Penh',
	},
	{
		country_name: 'Cambodia',
		province_name: 'Tbong Khmum',
	},
	{
		country_name: 'Cambodia',
		province_name: 'Oddar Meanchey',
	},
	{
		country_name: 'Cambodia',
		province_name: 'Kampong Thom',
	},
	{
		country_name: 'Cambodia',
		province_name: 'Prey Veng',
	},
	{
		country_name: 'Cambodia',
		province_name: 'Battambang',
	},
	{
		country_name: 'Cambodia',
		province_name: 'Bantey Meanchey',
	},
	{
		country_name: 'Cambodia',
		province_name: 'Mondulkiri',
	},
	{
		country_name: 'Cambodia',
		province_name: 'Kampot',
	},
	{
		country_name: 'Cambodia',
		province_name: 'Takeo',
	},
	{
		country_name: 'Cambodia',
		province_name: 'Kep',
	},
	{
		country_name: 'Cambodia',
		province_name: 'Kampong Speu',
	},
	{
		country_name: 'Cambodia',
		province_name: 'Pursat',
	},
	{
		country_name: 'Cambodia',
		province_name: 'Siem Reap',
	},
	{
		country_name: 'Cambodia',
		province_name: 'Koh Kong',
	},
	{
		country_name: 'Cambodia',
		province_name: 'Preah Vihear',
	},
	{
		country_name: 'Cambodia',
		province_name: 'Kampong Chhnang',
	},
	{
		country_name: 'Cameroon',
		province_name: 'Centre',
	},
	{
		country_name: 'Cameroon',
		province_name: 'Littoral',
	},
	{
		country_name: 'Cameroon',
		province_name: 'Adamawa',
	},
	{
		country_name: 'Cameroon',
		province_name: 'West',
	},
	{
		country_name: 'Cameroon',
		province_name: 'Southwest',
	},
	{
		country_name: 'Cameroon',
		province_name: 'North',
	},
	{
		country_name: 'Cameroon',
		province_name: 'South',
	},
	{
		country_name: 'Cameroon',
		province_name: 'East',
	},
	{
		country_name: 'Cameroon',
		province_name: 'Far-North',
	},
	{
		country_name: 'Cameroon',
		province_name: 'Northwest',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'Alberta',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'New Brunswick',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'British Columbia',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'Saskatchewan',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'Manitoba',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'Prince Edward Island',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'Newfoundland and Labrador',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'Yukon',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'Nova Scotia',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'Nunavut',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'Northwest Territories',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'Quebec',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'Ontario',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Canada',
		province_name: 'NU',
	},
	{
		country_name: 'Central African Republic',
		province_name: 'Haute-Kotto',
	},
	{
		country_name: 'Central African Republic',
		province_name: "Ombella M'Poko",
	},
	{
		country_name: 'Central African Republic',
		province_name: 'Ouham-Pendé',
	},
	{
		country_name: 'Central African Republic',
		province_name: 'Basse-Kotto',
	},
	{
		country_name: 'Central African Republic',
		province_name: 'Ouham',
	},
	{
		country_name: 'Central African Republic',
		province_name: 'Lobaye',
	},
	{
		country_name: 'Central African Republic',
		province_name: 'Nana-Mambéré',
	},
	{
		country_name: 'Central African Republic',
		province_name: 'Nana-Grébizi',
	},
	{
		country_name: 'Central African Republic',
		province_name: 'Sangha-Mbaéré',
	},
	{
		country_name: 'Central African Republic',
		province_name: 'Kémo',
	},
	{
		country_name: 'Central African Republic',
		province_name: 'Mbomou',
	},
	{
		country_name: 'Central African Republic',
		province_name: 'Vakaga',
	},
	{
		country_name: 'Central African Republic',
		province_name: 'Haut-Mbomou',
	},
	{
		country_name: 'Central African Republic',
		province_name: 'Ouaka',
	},
	{
		country_name: 'Central African Republic',
		province_name: 'Bamingui-Bangoran',
	},
	{
		country_name: 'Central African Republic',
		province_name: 'Bangui',
	},
	{
		country_name: 'Central African Republic',
		province_name: 'Mambéré-Kadéï',
	},
	{
		country_name: 'Chad',
		province_name: 'Guéra',
	},
	{
		country_name: 'Chad',
		province_name: 'Ennedi-Ouest',
	},
	{
		country_name: 'Chad',
		province_name: 'Mayo-Kebbi Ouest',
	},
	{
		country_name: 'Chad',
		province_name: 'Mayo-Kebbi Est',
	},
	{
		country_name: 'Chad',
		province_name: 'Tibesti',
	},
	{
		country_name: 'Chad',
		province_name: 'Salamat',
	},
	{
		country_name: 'Chad',
		province_name: 'Batha',
	},
	{
		country_name: 'Chad',
		province_name: 'Bahr el Gazel',
	},
	{
		country_name: 'Chad',
		province_name: 'Hadjer-Lamis',
	},
	{
		country_name: 'Chad',
		province_name: 'Chari-Baguirmi',
	},
	{
		country_name: 'Chad',
		province_name: 'Ouaddaï',
	},
	{
		country_name: 'Chad',
		province_name: 'Moyen-Chari',
	},
	{
		country_name: 'Chad',
		province_name: 'Kanem',
	},
	{
		country_name: 'Chad',
		province_name: 'Sila',
	},
	{
		country_name: 'Chad',
		province_name: 'Lac',
	},
	{
		country_name: 'Chad',
		province_name: 'Logone Oriental',
	},
	{
		country_name: 'Chad',
		province_name: 'Wadi Fira',
	},
	{
		country_name: 'Chad',
		province_name: 'Borkou',
	},
	{
		country_name: 'Chad',
		province_name: "N'Djamena",
	},
	{
		country_name: 'Chad',
		province_name: 'Logone Occidental',
	},
	{
		country_name: 'Chad',
		province_name: 'Tandjilé',
	},
	{
		country_name: 'Chad',
		province_name: 'Mandoul',
	},
	{
		country_name: 'Chad',
		province_name: 'East Ennedi',
	},
	{
		country_name: 'Chile',
		province_name: 'Región Metropolitana de Santiago',
	},
	{
		country_name: 'Chile',
		province_name: 'Región del Maule',
	},
	{
		country_name: 'Chile',
		province_name: "Región del Libertador General Bernardo O'Higgins",
	},
	{
		country_name: 'Chile',
		province_name: 'Región de Tarapacá',
	},
	{
		country_name: 'Chile',
		province_name: 'Región de Ñuble',
	},
	{
		country_name: 'Chile',
		province_name: 'Región de Coquimbo',
	},
	{
		country_name: 'Chile',
		province_name: 'Región de la Araucanía',
	},
	{
		country_name: 'Chile',
		province_name: 'Region of Magallanes and Chilean Antarctica',
	},
	{
		country_name: 'Chile',
		province_name: 'Región de Arica y Parinacota',
	},
	{
		country_name: 'Chile',
		province_name: 'Región Aysén del General Carlos Ibáñez del Campo',
	},
	{
		country_name: 'Chile',
		province_name: 'Región de Valparaíso',
	},
	{
		country_name: 'Chile',
		province_name: 'Región de Atacama',
	},
	{
		country_name: 'Chile',
		province_name: 'Región de Antofagasta',
	},
	{
		country_name: 'Chile',
		province_name: 'Región de Los Lagos',
	},
	{
		country_name: 'Chile',
		province_name: 'Región de Los Ríos',
	},
	{
		country_name: 'Chile',
		province_name: 'Región del Biobío',
	},
	{
		country_name: 'China',
		province_name: 'Yunnan',
	},
	{
		country_name: 'China',
		province_name: 'Anhui',
	},
	{
		country_name: 'China',
		province_name: 'Sichuan',
	},
	{
		country_name: 'China',
		province_name: 'Jiangxi',
	},
	{
		country_name: 'China',
		province_name: 'Shandong',
	},
	{
		country_name: 'China',
		province_name: 'Liaoning',
	},
	{
		country_name: 'China',
		province_name: 'Ningxia',
	},
	{
		country_name: 'China',
		province_name: 'Shaanxi',
	},
	{
		country_name: 'China',
		province_name: 'Tianjin',
	},
	{
		country_name: 'China',
		province_name: 'Beijing',
	},
	{
		country_name: 'China',
		province_name: 'Heilongjiang',
	},
	{
		country_name: 'China',
		province_name: 'Hebei',
	},
	{
		country_name: 'China',
		province_name: 'Hunan',
	},
	{
		country_name: 'China',
		province_name: 'Guizhou',
	},
	{
		country_name: 'China',
		province_name: 'Tibet',
	},
	{
		country_name: 'China',
		province_name: 'Guangdong Province',
	},
	{
		country_name: 'China',
		province_name: 'Chongqing',
	},
	{
		country_name: 'China',
		province_name: 'Qinghai',
	},
	{
		country_name: 'China',
		province_name: 'Henan',
	},
	{
		country_name: 'China',
		province_name: 'Hubei',
	},
	{
		country_name: 'China',
		province_name: 'Inner Mongolia',
	},
	{
		country_name: 'China',
		province_name: 'Shanxi',
	},
	{
		country_name: 'China',
		province_name: 'Guangxi',
	},
	{
		country_name: 'China',
		province_name: 'Gansu',
	},
	{
		country_name: 'China',
		province_name: 'Zhejiang',
	},
	{
		country_name: 'China',
		province_name: 'Hainan Province',
	},
	{
		country_name: 'China',
		province_name: 'Xinjiang',
	},
	{
		country_name: 'China',
		province_name: 'Jiangsu',
	},
	{
		country_name: 'China',
		province_name: 'Fujian Province',
	},
	{
		country_name: 'China',
		province_name: 'Jilin',
	},
	{
		country_name: 'Colombia',
		province_name: 'Magdalena',
	},
	{
		country_name: 'Colombia',
		province_name: 'Cundinamarca',
	},
	{
		country_name: 'Colombia',
		province_name: 'Archipiélago de San Andrés, Providencia y Santa Catalina',
	},
	{
		country_name: 'Colombia',
		province_name: 'Cauca',
	},
	{
		country_name: 'Colombia',
		province_name: 'Atlántico',
	},
	{
		country_name: 'Colombia',
		province_name: 'Caquetá',
	},
	{
		country_name: 'Colombia',
		province_name: 'Antioquia',
	},
	{
		country_name: 'Colombia',
		province_name: 'Risaralda',
	},
	{
		country_name: 'Colombia',
		province_name: 'Córdoba',
	},
	{
		country_name: 'Colombia',
		province_name: 'Guainía',
	},
	{
		country_name: 'Colombia',
		province_name: 'La Guajira',
	},
	{
		country_name: 'Colombia',
		province_name: 'Nariño',
	},
	{
		country_name: 'Colombia',
		province_name: 'Quindío',
	},
	{
		country_name: 'Colombia',
		province_name: 'Chocó',
	},
	{
		country_name: 'Colombia',
		province_name: 'Sucre',
	},
	{
		country_name: 'Colombia',
		province_name: 'Santander',
	},
	{
		country_name: 'Colombia',
		province_name: 'Bolívar',
	},
	{
		country_name: 'Colombia',
		province_name: 'Amazonas',
	},
	{
		country_name: 'Colombia',
		province_name: 'Tolima',
	},
	{
		country_name: 'Colombia',
		province_name: 'Boyacá',
	},
	{
		country_name: 'Colombia',
		province_name: 'Vaupés',
	},
	{
		country_name: 'Colombia',
		province_name: 'Caldas',
	},
	{
		country_name: 'Colombia',
		province_name: 'Vichada',
	},
	{
		country_name: 'Colombia',
		province_name: 'Valle del Cauca',
	},
	{
		country_name: 'Colombia',
		province_name: 'Guaviare',
	},
	{
		country_name: 'Colombia',
		province_name: 'Norte de Santander',
	},
	{
		country_name: 'Colombia',
		province_name: 'Putumayo',
	},
	{
		country_name: 'Colombia',
		province_name: 'Cesar',
	},
	{
		country_name: 'Colombia',
		province_name: 'Casanare',
	},
	{
		country_name: 'Colombia',
		province_name: 'Meta',
	},
	{
		country_name: 'Colombia',
		province_name: 'Huila',
	},
	{
		country_name: 'Colombia',
		province_name: 'Arauca',
	},
	{
		country_name: 'Comoros',
		province_name: 'Anjouan',
	},
	{
		country_name: 'Comoros',
		province_name: 'Moheli',
	},
	{
		country_name: 'Comoros',
		province_name: 'Grande Comore',
	},
	{
		country_name: 'Congo-Brazzaville',
		province_name: 'Niari',
	},
	{
		country_name: 'Congo-Brazzaville',
		province_name: 'Brazzaville',
	},
	{
		country_name: 'Congo-Brazzaville',
		province_name: 'Lékoumou',
	},
	{
		country_name: 'Congo-Brazzaville',
		province_name: 'Kouilou',
	},
	{
		country_name: 'Congo-Brazzaville',
		province_name: 'Sangha',
	},
	{
		country_name: 'Congo-Brazzaville',
		province_name: 'Bouenza',
	},
	{
		country_name: 'Congo-Brazzaville',
		province_name: 'Pool',
	},
	{
		country_name: 'Congo-Brazzaville',
		province_name: 'Cuvette',
	},
	{
		country_name: 'Congo-Brazzaville',
		province_name: 'Pointe-Noire',
	},
	{
		country_name: 'Congo-Brazzaville',
		province_name: 'Cuvette-Ouest',
	},
	{
		country_name: 'Congo-Brazzaville',
		province_name: 'Likouala',
	},
	{
		country_name: 'Congo-Brazzaville',
		province_name: 'Plateaux',
	},
	{
		country_name: 'Cook Islands',
		province_name: 'Rarotonga',
	},
	{
		country_name: 'Cook Islands',
		province_name: 'Mauke',
	},
	{
		country_name: 'Costa Rica',
		province_name: 'Alajuela Province',
	},
	{
		country_name: 'Costa Rica',
		province_name: 'Limón Province',
	},
	{
		country_name: 'Costa Rica',
		province_name: 'Provincia Puntarenas',
	},
	{
		country_name: 'Costa Rica',
		province_name: 'Provincia Guanacaste',
	},
	{
		country_name: 'Costa Rica',
		province_name: 'Heredia Province',
	},
	{
		country_name: 'Costa Rica',
		province_name: 'Cartago Province',
	},
	{
		country_name: 'Costa Rica',
		province_name: 'San Jose Province',
	},
	{
		country_name: 'Cuba',
		province_name: 'Sancti Spiritus',
	},
	{
		country_name: 'Cuba',
		province_name: 'Isle of Youth',
	},
	{
		country_name: 'Cuba',
		province_name: 'Havana',
	},
	{
		country_name: 'Cuba',
		province_name: 'Cienfuegos',
	},
	{
		country_name: 'Cuba',
		province_name: 'Guantánamo',
	},
	{
		country_name: 'Cuba',
		province_name: 'Ciego de Avila',
	},
	{
		country_name: 'Cuba',
		province_name: 'Mayabeque',
	},
	{
		country_name: 'Cuba',
		province_name: 'Granma',
	},
	{
		country_name: 'Cuba',
		province_name: 'Villa Clara',
	},
	{
		country_name: 'Cuba',
		province_name: 'Artemisa',
	},
	{
		country_name: 'Cuba',
		province_name: 'Santiago de Cuba',
	},
	{
		country_name: 'Cuba',
		province_name: 'Camagüey',
	},
	{
		country_name: 'Cuba',
		province_name: 'Matanzas',
	},
	{
		country_name: 'Cuba',
		province_name: 'Las Tunas',
	},
	{
		country_name: 'Cuba',
		province_name: 'Holguín',
	},
	{
		country_name: 'Cuba',
		province_name: 'Pinar del Rio',
	},
	{
		country_name: 'Czechia',
		province_name: 'Central Bohemia',
	},
	{
		country_name: 'Czechia',
		province_name: 'Northeast',
	},
	{
		country_name: 'Czechia',
		province_name: 'Central Moravia',
	},
	{
		country_name: 'Czechia',
		province_name: 'Moravia-Silesia',
	},
	{
		country_name: 'Czechia',
		province_name: 'Prague',
	},
	{
		country_name: 'Czechia',
		province_name: 'Southeast',
	},
	{
		country_name: 'Czechia',
		province_name: 'Southwest',
	},
	{
		country_name: 'Czechia',
		province_name: 'Northwest',
	},
	{
		country_name: "Côte d'Ivoire",
		province_name: 'Sassandra-Marahoué',
	},
	{
		country_name: "Côte d'Ivoire",
		province_name: 'Lacs',
	},
	{
		country_name: "Côte d'Ivoire",
		province_name: 'Gôh-Djiboua',
	},
	{
		country_name: "Côte d'Ivoire",
		province_name: 'Montagnes',
	},
	{
		country_name: "Côte d'Ivoire",
		province_name: 'Yamoussoukro',
	},
	{
		country_name: "Côte d'Ivoire",
		province_name: 'Vallée du Bandama',
	},
	{
		country_name: "Côte d'Ivoire",
		province_name: 'Comoé',
	},
	{
		country_name: "Côte d'Ivoire",
		province_name: 'Savanes',
	},
	{
		country_name: "Côte d'Ivoire",
		province_name: 'Lagunes',
	},
	{
		country_name: "Côte d'Ivoire",
		province_name: 'Abidjan',
	},
	{
		country_name: "Côte d'Ivoire",
		province_name: 'Woroba',
	},
	{
		country_name: "Côte d'Ivoire",
		province_name: 'Zanzan',
	},
	{
		country_name: "Côte d'Ivoire",
		province_name: 'Bas-Sassandra',
	},
	{
		country_name: "Côte d'Ivoire",
		province_name: 'Denguélé',
	},
	{
		country_name: 'Democratic Republic of the Congo',
		province_name: 'Kwilu',
	},
	{
		country_name: 'Democratic Republic of the Congo',
		province_name: 'Haut-Lomami',
	},
	{
		country_name: 'Democratic Republic of the Congo',
		province_name: 'Lower Uele',
	},
	{
		country_name: 'Democratic Republic of the Congo',
		province_name: 'Mai-Ndombe',
	},
	{
		country_name: 'Democratic Republic of the Congo',
		province_name: 'Tshopo',
	},
	{
		country_name: 'Democratic Republic of the Congo',
		province_name: 'Central Kasai',
	},
	{
		country_name: 'Democratic Republic of the Congo',
		province_name: 'Sud-Ubangi',
	},
	{
		country_name: 'Democratic Republic of the Congo',
		province_name: 'Haut-Katanga',
	},
	{
		country_name: 'Democratic Republic of the Congo',
		province_name: 'Sankuru',
	},
	{
		country_name: 'Democratic Republic of the Congo',
		province_name: 'South Kivu',
	},
	{
		country_name: 'Democratic Republic of the Congo',
		province_name: 'North Kivu',
	},
	{
		country_name: 'Democratic Republic of the Congo',
		province_name: 'Maniema',
	},
	{
		country_name: 'Democratic Republic of the Congo',
		province_name: 'Kinshasa',
	},
	{
		country_name: 'Democratic Republic of the Congo',
		province_name: 'Kasai-Oriental',
	},
	{
		country_name: 'Democratic Republic of the Congo',
		province_name: 'Ituri',
	},
	{
		country_name: 'Democratic Republic of the Congo',
		province_name: 'Kwango',
	},
	{
		country_name: 'Democratic Republic of the Congo',
		province_name: 'Équateur',
	},
	{
		country_name: 'Democratic Republic of the Congo',
		province_name: 'Mongala',
	},
	{
		country_name: 'Democratic Republic of the Congo',
		province_name: 'Lualaba',
	},
	{
		country_name: 'Democratic Republic of the Congo',
		province_name: 'Nord-Ubangi',
	},
	{
		country_name: 'Democratic Republic of the Congo',
		province_name: 'Kongo-Central',
	},
	{
		country_name: 'Democratic Republic of the Congo',
		province_name: 'Tshuapa',
	},
	{
		country_name: 'Democratic Republic of the Congo',
		province_name: 'Tanganyika',
	},
	{
		country_name: 'Democratic Republic of the Congo',
		province_name: 'Kasai',
	},
	{
		country_name: 'Democratic Republic of the Congo',
		province_name: 'Lomami',
	},
	{
		country_name: 'Democratic Republic of the Congo',
		province_name: 'Upper Uele',
	},
	{
		country_name: 'Denmark',
		province_name: 'Central Denmark Region',
	},
	{
		country_name: 'Denmark',
		province_name: 'Capital Region of Denmark',
	},
	{
		country_name: 'Denmark',
		province_name: 'Region of Southern Denmark',
	},
	{
		country_name: 'Denmark',
		province_name: 'North Denmark Region',
	},
	{
		country_name: 'Denmark',
		province_name: 'Region Zealand',
	},
	{
		country_name: 'Djibouti',
		province_name: 'Arta',
	},
	{
		country_name: 'Djibouti',
		province_name: 'Djibouti',
	},
	{
		country_name: 'Djibouti',
		province_name: 'Obock',
	},
	{
		country_name: 'Djibouti',
		province_name: 'Ali Sabieh',
	},
	{
		country_name: 'Djibouti',
		province_name: 'Tadjourah',
	},
	{
		country_name: 'Djibouti',
		province_name: 'Dikhil',
	},
	{
		country_name: 'Dominica',
		province_name: 'Saint John Parish',
	},
	{
		country_name: 'Dominica',
		province_name: 'Saint Andrew Parish',
	},
	{
		country_name: 'Dominica',
		province_name: 'Saint George Parish',
	},
	{
		country_name: 'Dominica',
		province_name: 'Saint Patrick Parish',
	},
	{
		country_name: 'Dominica',
		province_name: 'Saint Paul Parish',
	},
	{
		country_name: 'Dominica',
		province_name: 'Saint Joseph Parish',
	},
	{
		country_name: 'Dominica',
		province_name: 'Saint David Parish',
	},
	{
		country_name: 'Dominica',
		province_name: 'Saint Mark Parish',
	},
	{
		country_name: 'Dominica',
		province_name: 'Saint Luke Parish',
	},
	{
		country_name: 'Dominica',
		province_name: 'Saint Peter Parish',
	},
	{
		country_name: 'Dominican Republic',
		province_name: 'Santiago Rodríguez',
	},
	{
		country_name: 'Dominican Republic',
		province_name: 'Hermanas Mirabal',
	},
	{
		country_name: 'Dominican Republic',
		province_name: 'San Cristóbal',
	},
	{
		country_name: 'Dominican Republic',
		province_name: 'Samaná',
	},
	{
		country_name: 'Dominican Republic',
		province_name: 'San Juan',
	},
	{
		country_name: 'Dominican Republic',
		province_name: 'Pedernales',
	},
	{
		country_name: 'Dominican Republic',
		province_name: 'Elías Piña',
	},
	{
		country_name: 'Dominican Republic',
		province_name: 'El Seibo',
	},
	{
		country_name: 'Dominican Republic',
		province_name: 'Baoruco',
	},
	{
		country_name: 'Dominican Republic',
		province_name: 'La Altagracia',
	},
	{
		country_name: 'Dominican Republic',
		province_name: 'Santo Domingo',
	},
	{
		country_name: 'Dominican Republic',
		province_name: 'Valverde',
	},
	{
		country_name: 'Dominican Republic',
		province_name: 'La Vega',
	},
	{
		country_name: 'Dominican Republic',
		province_name: 'Dajabón',
	},
	{
		country_name: 'Dominican Republic',
		province_name: 'María Trinidad Sánchez',
	},
	{
		country_name: 'Dominican Republic',
		province_name: 'Santiago',
	},
	{
		country_name: 'Dominican Republic',
		province_name: 'Sánchez Ramírez',
	},
	{
		country_name: 'Dominican Republic',
		province_name: 'Duarte',
	},
	{
		country_name: 'Dominican Republic',
		province_name: 'Puerto Plata',
	},
	{
		country_name: 'Dominican Republic',
		province_name: 'San José de Ocoa',
	},
	{
		country_name: 'Dominican Republic',
		province_name: 'Azua',
	},
	{
		country_name: 'Dominican Republic',
		province_name: 'Hato Mayor',
	},
	{
		country_name: 'Dominican Republic',
		province_name: 'Monseñor Nouel',
	},
	{
		country_name: 'Dominican Republic',
		province_name: 'Monte Cristi',
	},
	{
		country_name: 'Dominican Republic',
		province_name: 'Independencia',
	},
	{
		country_name: 'Dominican Republic',
		province_name: 'San Pedro de Macorís',
	},
	{
		country_name: 'Dominican Republic',
		province_name: 'Barahona',
	},
	{
		country_name: 'Dominican Republic',
		province_name: 'Monte Plata',
	},
	{
		country_name: 'Dominican Republic',
		province_name: 'Espaillat',
	},
	{
		country_name: 'Dominican Republic',
		province_name: 'La Romana',
	},
	{
		country_name: 'Dominican Republic',
		province_name: 'Peravia',
	},
	{
		country_name: 'East Timor',
		province_name: 'Baucau',
	},
	{
		country_name: 'East Timor',
		province_name: 'Manufahi',
	},
	{
		country_name: 'East Timor',
		province_name: 'Dili',
	},
	{
		country_name: 'East Timor',
		province_name: 'Bobonaro',
	},
	{
		country_name: 'East Timor',
		province_name: 'Oecusse',
	},
	{
		country_name: 'East Timor',
		province_name: 'Lautém',
	},
	{
		country_name: 'East Timor',
		province_name: 'Viqueque',
	},
	{
		country_name: 'East Timor',
		province_name: 'Ermera',
	},
	{
		country_name: 'East Timor',
		province_name: 'Aileu',
	},
	{
		country_name: 'East Timor',
		province_name: 'Liquiçá',
	},
	{
		country_name: 'East Timor',
		province_name: 'Ainaro',
	},
	{
		country_name: 'East Timor',
		province_name: 'Manatuto',
	},
	{
		country_name: 'East Timor',
		province_name: 'Cova Lima',
	},
	{
		country_name: 'Ecuador',
		province_name: 'Tungurahua',
	},
	{
		country_name: 'Ecuador',
		province_name: 'Carchi',
	},
	{
		country_name: 'Ecuador',
		province_name: 'Morona Santiago',
	},
	{
		country_name: 'Ecuador',
		province_name: 'Orellana',
	},
	{
		country_name: 'Ecuador',
		province_name: 'Imbabura',
	},
	{
		country_name: 'Ecuador',
		province_name: 'Cañar',
	},
	{
		country_name: 'Ecuador',
		province_name: 'Zamora Chinchipe',
	},
	{
		country_name: 'Ecuador',
		province_name: 'Los Ríos',
	},
	{
		country_name: 'Ecuador',
		province_name: 'Bolívar',
	},
	{
		country_name: 'Ecuador',
		province_name: 'Manabí',
	},
	{
		country_name: 'Ecuador',
		province_name: 'Galápagos',
	},
	{
		country_name: 'Ecuador',
		province_name: 'Loja',
	},
	{
		country_name: 'Ecuador',
		province_name: 'Esmeraldas',
	},
	{
		country_name: 'Ecuador',
		province_name: 'Santo Domingo de los Tsáchilas',
	},
	{
		country_name: 'Ecuador',
		province_name: 'Pastaza',
	},
	{
		country_name: 'Ecuador',
		province_name: 'El Oro',
	},
	{
		country_name: 'Ecuador',
		province_name: 'Azuay',
	},
	{
		country_name: 'Ecuador',
		province_name: 'Napo',
	},
	{
		country_name: 'Ecuador',
		province_name: 'Pichincha',
	},
	{
		country_name: 'Ecuador',
		province_name: 'Santa Elena Province',
	},
	{
		country_name: 'Ecuador',
		province_name: 'Cotopaxi',
	},
	{
		country_name: 'Ecuador',
		province_name: 'Sucumbíos',
	},
	{
		country_name: 'Ecuador',
		province_name: 'Chimborazo',
	},
	{
		country_name: 'Ecuador',
		province_name: 'Guayas',
	},
	{
		country_name: 'Egypt',
		province_name: 'Luxor Governate',
	},
	{
		country_name: 'Egypt',
		province_name: 'Beni Suef Governorate',
	},
	{
		country_name: 'Egypt',
		province_name: 'Qena Governorate',
	},
	{
		country_name: 'Egypt',
		province_name: 'Damietta Governorate',
	},
	{
		country_name: 'Egypt',
		province_name: 'Ismailia',
	},
	{
		country_name: 'Egypt',
		province_name: 'Faiyum Governorate',
	},
	{
		country_name: 'Egypt',
		province_name: 'New Valley Governorate',
	},
	{
		country_name: 'Egypt',
		province_name: 'North Sinai',
	},
	{
		country_name: 'Egypt',
		province_name: 'Gharbiyya Governorate',
	},
	{
		country_name: 'Egypt',
		province_name: 'Suez Governorate',
	},
	{
		country_name: 'Egypt',
		province_name: 'Sohag Governorate',
	},
	{
		country_name: 'Egypt',
		province_name: 'Cairo Governorate',
	},
	{
		country_name: 'Egypt',
		province_name: 'Qalyubia Governorate',
	},
	{
		country_name: 'Egypt',
		province_name: 'Monufia Governorate',
	},
	{
		country_name: 'Egypt',
		province_name: 'Beheira Governorate',
	},
	{
		country_name: 'Egypt',
		province_name: 'Red Sea Governorate',
	},
	{
		country_name: 'Egypt',
		province_name: 'Asyut Governorate',
	},
	{
		country_name: 'Egypt',
		province_name: 'Dakahlia Governorate',
	},
	{
		country_name: 'Egypt',
		province_name: 'Al Sharqia Governorate',
	},
	{
		country_name: 'Egypt',
		province_name: 'Giza Governorate',
	},
	{
		country_name: 'Egypt',
		province_name: 'Matrouh',
	},
	{
		country_name: 'Egypt',
		province_name: 'South Sinai',
	},
	{
		country_name: 'Egypt',
		province_name: 'Assouan',
	},
	{
		country_name: 'Egypt',
		province_name: 'Minya Governate',
	},
	{
		country_name: 'Egypt',
		province_name: 'Port Said',
	},
	{
		country_name: 'Egypt',
		province_name: 'Kafr el-Sheikh Governorate',
	},
	{
		country_name: 'El Salvador',
		province_name: 'Departamento de Cuscatlán',
	},
	{
		country_name: 'El Salvador',
		province_name: 'Departamento de Sonsonate',
	},
	{
		country_name: 'El Salvador',
		province_name: 'San Vicente',
	},
	{
		country_name: 'El Salvador',
		province_name: 'La Libertad',
	},
	{
		country_name: 'El Salvador',
		province_name: 'Departamento de La Paz',
	},
	{
		country_name: 'El Salvador',
		province_name: 'Departamento de San Miguel',
	},
	{
		country_name: 'El Salvador',
		province_name: 'Departamento de Santa Ana',
	},
	{
		country_name: 'El Salvador',
		province_name: 'Departamento de Usulután',
	},
	{
		country_name: 'El Salvador',
		province_name: 'Departamento de Morazán',
	},
	{
		country_name: 'El Salvador',
		province_name: 'Departamento de Chalatenango',
	},
	{
		country_name: 'El Salvador',
		province_name: 'Departamento de Ahuachapán',
	},
	{
		country_name: 'El Salvador',
		province_name: 'Departamento de La Unión',
	},
	{
		country_name: 'El Salvador',
		province_name: 'Departamento de San Salvador',
	},
	{
		country_name: 'El Salvador',
		province_name: 'Departamento de Cabañas',
	},
	{
		country_name: 'Equatorial Guinea',
		province_name: 'Litoral',
	},
	{
		country_name: 'Equatorial Guinea',
		province_name: 'Bioko Norte',
	},
	{
		country_name: 'Equatorial Guinea',
		province_name: 'Centro Sur',
	},
	{
		country_name: 'Equatorial Guinea',
		province_name: 'Kié-Ntem',
	},
	{
		country_name: 'Equatorial Guinea',
		province_name: 'Annobón',
	},
	{
		country_name: 'Equatorial Guinea',
		province_name: 'Wele-Nzas',
	},
	{
		country_name: 'Equatorial Guinea',
		province_name: 'Bioko Sur',
	},
	{
		country_name: 'Eritrea',
		province_name: 'Northen Red Sea Region',
	},
	{
		country_name: 'Eritrea',
		province_name: 'Maekel Region',
	},
	{
		country_name: 'Eritrea',
		province_name: 'Anseba',
	},
	{
		country_name: 'Eritrea',
		province_name: 'Debub Region',
	},
	{
		country_name: 'Eritrea',
		province_name: 'Gash-Barka',
	},
	{
		country_name: 'Eswatini',
		province_name: 'Hhohho',
	},
	{
		country_name: 'Eswatini',
		province_name: 'Lubombo',
	},
	{
		country_name: 'Eswatini',
		province_name: 'Shiselweni',
	},
	{
		country_name: 'Eswatini',
		province_name: 'Manzini',
	},
	{
		country_name: 'Ethiopia',
		province_name: 'Dire Dawa',
	},
	{
		country_name: 'Ethiopia',
		province_name: 'Sidama',
	},
	{
		country_name: 'Ethiopia',
		province_name: 'Amhara Region',
	},
	{
		country_name: 'Ethiopia',
		province_name: 'Afar Region',
	},
	{
		country_name: 'Ethiopia',
		province_name: 'Addis Ababa',
	},
	{
		country_name: 'Ethiopia',
		province_name: 'Harar',
	},
	{
		country_name: 'Ethiopia',
		province_name: 'Tigray',
	},
	{
		country_name: 'Ethiopia',
		province_name: 'Southern Nations',
	},
	{
		country_name: 'Ethiopia',
		province_name: 'Somali Region',
	},
	{
		country_name: 'Ethiopia',
		province_name: 'Oromia Region',
	},
	{
		country_name: 'Ethiopia',
		province_name: 'Gambela Region',
	},
	{
		country_name: 'Ethiopia',
		province_name: 'Benishangul-Gumuz Region',
	},
	{
		country_name: 'Faroe Islands',
		province_name: 'Eysturoy region',
	},
	{
		country_name: 'Faroe Islands',
		province_name: 'Streymoy region',
	},
	{
		country_name: 'Faroe Islands',
		province_name: 'Vágar region',
	},
	{
		country_name: 'Faroe Islands',
		province_name: 'Norðoyar region',
	},
	{
		country_name: 'Faroe Islands',
		province_name: 'Sandoy region',
	},
	{
		country_name: 'Faroe Islands',
		province_name: 'Suðuroy region',
	},
	{
		country_name: 'Federated States of Micronesia',
		province_name: 'Pohnpei',
	},
	{
		country_name: 'Federated States of Micronesia',
		province_name: 'Chuuk',
	},
	{
		country_name: 'Federated States of Micronesia',
		province_name: 'Yap',
	},
	{
		country_name: 'Federated States of Micronesia',
		province_name: 'Kosrae',
	},
	{
		country_name: 'Fiji',
		province_name: 'Rotuma',
	},
	{
		country_name: 'Fiji',
		province_name: 'Eastern',
	},
	{
		country_name: 'Fiji',
		province_name: 'Central',
	},
	{
		country_name: 'Fiji',
		province_name: 'Western',
	},
	{
		country_name: 'Fiji',
		province_name: 'Northern',
	},
	{
		country_name: 'France',
		province_name: "Provence-Alpes-Côte d'Azur",
	},
	{
		country_name: 'France',
		province_name: 'Brittany',
	},
	{
		country_name: 'France',
		province_name: 'Martinique',
	},
	{
		country_name: 'France',
		province_name: 'Mayotte',
	},
	{
		country_name: 'France',
		province_name: 'Guadeloupe',
	},
	{
		country_name: 'France',
		province_name: 'Bourgogne-Franche-Comté',
	},
	{
		country_name: 'France',
		province_name: 'Tromelin Island',
	},
	{
		country_name: 'France',
		province_name: 'Pays de la Loire',
	},
	{
		country_name: 'France',
		province_name: 'Normandy',
	},
	{
		country_name: 'France',
		province_name: 'Corsica',
	},
	{
		country_name: 'France',
		province_name: 'Ile-de-France',
	},
	{
		country_name: 'France',
		province_name: 'Centre-Loire Valley',
	},
	{
		country_name: 'France',
		province_name: 'Hauts-de-France',
	},
	{
		country_name: 'France',
		province_name: 'Grand Est',
	},
	{
		country_name: 'France',
		province_name: 'Occitania',
	},
	{
		country_name: 'France',
		province_name: 'Auvergne-Rhône-Alpes',
	},
	{
		country_name: 'France',
		province_name: 'Clipperton Island',
	},
	{
		country_name: 'France',
		province_name: 'French Guiana',
	},
	{
		country_name: 'France',
		province_name: 'Réunion',
	},
	{
		country_name: 'France',
		province_name: 'New Aquitaine',
	},
	{
		country_name: 'Gabon',
		province_name: 'Estuaire',
	},
	{
		country_name: 'Gabon',
		province_name: 'Haut-Ogooué',
	},
	{
		country_name: 'Gabon',
		province_name: 'Woleu-Ntem',
	},
	{
		country_name: 'Gabon',
		province_name: 'Ngounié',
	},
	{
		country_name: 'Gabon',
		province_name: 'Ogooué-Maritime',
	},
	{
		country_name: 'Gabon',
		province_name: 'Nyanga',
	},
	{
		country_name: 'Gabon',
		province_name: 'Moyen-Ogooué',
	},
	{
		country_name: 'Gabon',
		province_name: 'Ogooué-Lolo',
	},
	{
		country_name: 'Gabon',
		province_name: 'Ogooué-Ivindo',
	},
	{
		country_name: 'Georgia',
		province_name: 'Tbilisi',
	},
	{
		country_name: 'Georgia',
		province_name: 'Guria',
	},
	{
		country_name: 'Georgia',
		province_name: 'Lower Kartli',
	},
	{
		country_name: 'Georgia',
		province_name: 'Racha-Lechkhumi and Lower Svaneti',
	},
	{
		country_name: 'Georgia',
		province_name: 'Autonomous Republic of Abkhazia',
	},
	{
		country_name: 'Georgia',
		province_name: 'Samegrelo-Upper Svaneti',
	},
	{
		country_name: 'Georgia',
		province_name: 'Mtskheta-Mtianeti',
	},
	{
		country_name: 'Georgia',
		province_name: 'Inner Kartli',
	},
	{
		country_name: 'Georgia',
		province_name: 'Imereti',
	},
	{
		country_name: 'Georgia',
		province_name: 'Samtskhe-Javakheti',
	},
	{
		country_name: 'Georgia',
		province_name: 'Kakheti',
	},
	{
		country_name: 'Georgia',
		province_name: 'Autonomous Republic of Adjara',
	},
	{
		country_name: 'Germany',
		province_name: 'Thuringia',
	},
	{
		country_name: 'Germany',
		province_name: 'Hesse',
	},
	{
		country_name: 'Germany',
		province_name: 'Saarland',
	},
	{
		country_name: 'Germany',
		province_name: 'North Rhine-Westphalia',
	},
	{
		country_name: 'Germany',
		province_name: 'Lower Saxony',
	},
	{
		country_name: 'Germany',
		province_name: 'Saxony-Anhalt',
	},
	{
		country_name: 'Germany',
		province_name: 'Baden-Württemberg',
	},
	{
		country_name: 'Germany',
		province_name: 'Brandenburg',
	},
	{
		country_name: 'Germany',
		province_name: 'Berlin',
	},
	{
		country_name: 'Germany',
		province_name: 'Schleswig-Holstein',
	},
	{
		country_name: 'Germany',
		province_name: 'Bremen',
	},
	{
		country_name: 'Germany',
		province_name: 'Mecklenburg-Vorpommern',
	},
	{
		country_name: 'Germany',
		province_name: 'Rhineland-Palatinate',
	},
	{
		country_name: 'Germany',
		province_name: 'Hamburg',
	},
	{
		country_name: 'Germany',
		province_name: 'Saxony',
	},
	{
		country_name: 'Germany',
		province_name: 'Bavaria',
	},
	{
		country_name: 'Ghana',
		province_name: 'Bono East Region',
	},
	{
		country_name: 'Ghana',
		province_name: 'Western North Region',
	},
	{
		country_name: 'Ghana',
		province_name: 'Bono Region',
	},
	{
		country_name: 'Ghana',
		province_name: 'Volta Region',
	},
	{
		country_name: 'Ghana',
		province_name: 'Northern Region',
	},
	{
		country_name: 'Ghana',
		province_name: 'Savannah Region',
	},
	{
		country_name: 'Ghana',
		province_name: 'North East Region',
	},
	{
		country_name: 'Ghana',
		province_name: 'Ahafo Region',
	},
	{
		country_name: 'Ghana',
		province_name: 'Oti Region',
	},
	{
		country_name: 'Ghana',
		province_name: 'Greater Accra Region',
	},
	{
		country_name: 'Ghana',
		province_name: 'Central Region',
	},
	{
		country_name: 'Ghana',
		province_name: 'Ashanti Region',
	},
	{
		country_name: 'Ghana',
		province_name: 'Western Region',
	},
	{
		country_name: 'Ghana',
		province_name: 'Eastern Region',
	},
	{
		country_name: 'Ghana',
		province_name: 'Upper West Region',
	},
	{
		country_name: 'Gibraltar',
		province_name: 'Gibraltar',
	},
	{
		country_name: 'Greece',
		province_name: 'Thessaly and Central Greece',
	},
	{
		country_name: 'Greece',
		province_name: 'Attica',
	},
	{
		country_name: 'Greece',
		province_name: 'Peloponnese, Western Greece and the Ionian',
	},
	{
		country_name: 'Greece',
		province_name: 'Region of Crete',
	},
	{
		country_name: 'Greece',
		province_name: 'Epirus and Western Macedonia',
	},
	{
		country_name: 'Greece',
		province_name: 'Aegean',
	},
	{
		country_name: 'Greece',
		province_name: 'Macedonia and Thrace',
	},
	{
		country_name: 'Greenland',
		province_name: 'Pituffik',
	},
	{
		country_name: 'Greenland',
		province_name: 'Qeqqata',
	},
	{
		country_name: 'Greenland',
		province_name: 'Qeqertalik',
	},
	{
		country_name: 'Greenland',
		province_name: 'Kujalleq',
	},
	{
		country_name: 'Greenland',
		province_name: 'Sermersooq',
	},
	{
		country_name: 'Greenland',
		province_name: 'Avannaata',
	},
	{
		country_name: 'Guatemala',
		province_name: 'Santa Rosa',
	},
	{
		country_name: 'Guatemala',
		province_name: 'Baja Verapaz',
	},
	{
		country_name: 'Guatemala',
		province_name: 'Zacapa',
	},
	{
		country_name: 'Guatemala',
		province_name: 'Guatemala',
	},
	{
		country_name: 'Guatemala',
		province_name: 'Quetzaltenango',
	},
	{
		country_name: 'Guatemala',
		province_name: 'Totonicapán',
	},
	{
		country_name: 'Guatemala',
		province_name: 'San Marcos',
	},
	{
		country_name: 'Guatemala',
		province_name: 'Escuintla',
	},
	{
		country_name: 'Guatemala',
		province_name: 'El Progreso',
	},
	{
		country_name: 'Guatemala',
		province_name: 'Chiquimula',
	},
	{
		country_name: 'Guatemala',
		province_name: 'Jalapa',
	},
	{
		country_name: 'Guatemala',
		province_name: 'Alta Verapaz',
	},
	{
		country_name: 'Guatemala',
		province_name: 'Huehuetenango',
	},
	{
		country_name: 'Guatemala',
		province_name: 'Sacatepéquez',
	},
	{
		country_name: 'Guatemala',
		province_name: 'Retalhuleu',
	},
	{
		country_name: 'Guatemala',
		province_name: 'Izabal',
	},
	{
		country_name: 'Guatemala',
		province_name: 'Jutiapa',
	},
	{
		country_name: 'Guatemala',
		province_name: 'Suchitepéquez',
	},
	{
		country_name: 'Guatemala',
		province_name: 'Ciudad de Guatemala',
	},
	{
		country_name: 'Guatemala',
		province_name: 'Chimaltenango',
	},
	{
		country_name: 'Guatemala',
		province_name: 'Quiché',
	},
	{
		country_name: 'Guatemala',
		province_name: 'Sololá',
	},
	{
		country_name: 'Guatemala',
		province_name: 'Petén',
	},
	{
		country_name: 'Guernsey',
		province_name: 'Alderney',
	},
	{
		country_name: 'Guernsey',
		province_name: 'Guernsey',
	},
	{
		country_name: 'Guernsey',
		province_name: 'Sark',
	},
	{
		country_name: 'Guinea',
		province_name: 'Conakry',
	},
	{
		country_name: 'Guinea',
		province_name: 'Kankan',
	},
	{
		country_name: 'Guinea',
		province_name: 'Faranah',
	},
	{
		country_name: 'Guinea',
		province_name: 'Nzérékoré',
	},
	{
		country_name: 'Guinea',
		province_name: 'Boké',
	},
	{
		country_name: 'Guinea',
		province_name: 'Mamou',
	},
	{
		country_name: 'Guinea',
		province_name: 'Labé',
	},
	{
		country_name: 'Guinea',
		province_name: 'Kindia',
	},
	{
		country_name: 'Guinea-Bissau',
		province_name: 'Região de Cacheu',
	},
	{
		country_name: 'Guinea-Bissau',
		province_name: 'Região de Oio',
	},
	{
		country_name: 'Guinea-Bissau',
		province_name: 'Bissau Autonomous Sector',
	},
	{
		country_name: 'Guinea-Bissau',
		province_name: 'Região de Biombo',
	},
	{
		country_name: 'Guinea-Bissau',
		province_name: 'Região de Quinara',
	},
	{
		country_name: 'Guinea-Bissau',
		province_name: 'Região de Bolama',
	},
	{
		country_name: 'Guinea-Bissau',
		province_name: 'Região de Bafatá',
	},
	{
		country_name: 'Guinea-Bissau',
		province_name: 'Região de Gabu',
	},
	{
		country_name: 'Guinea-Bissau',
		province_name: 'Região de Tombali',
	},
	{
		country_name: 'Guyana',
		province_name: 'Pomeroon-Supenaam',
	},
	{
		country_name: 'Guyana',
		province_name: 'Upper Demerara-Berbice',
	},
	{
		country_name: 'Guyana',
		province_name: 'Potaro-Siparuni',
	},
	{
		country_name: 'Guyana',
		province_name: 'Upper Takutu-Upper Essequibo',
	},
	{
		country_name: 'Guyana',
		province_name: 'Essequibo Islands-West Demerara',
	},
	{
		country_name: 'Guyana',
		province_name: 'Mahaica-Berbice',
	},
	{
		country_name: 'Guyana',
		province_name: 'Demerara-Mahaica',
	},
	{
		country_name: 'Guyana',
		province_name: 'Barima-Waini',
	},
	{
		country_name: 'Guyana',
		province_name: 'Cuyuni-Mazaruni',
	},
	{
		country_name: 'Guyana',
		province_name: 'East Berbice-Corentyne',
	},
	{
		country_name: 'Haiti',
		province_name: 'Sud Department',
	},
	{
		country_name: 'Haiti',
		province_name: 'Nord-Est Department',
	},
	{
		country_name: 'Haiti',
		province_name: 'Département du Nord',
	},
	{
		country_name: 'Haiti',
		province_name: 'Artibonite Department',
	},
	{
		country_name: 'Haiti',
		province_name: 'Île de la Navasse / Navassa Island',
	},
	{
		country_name: 'Haiti',
		province_name: 'Département des Nippes',
	},
	{
		country_name: 'Haiti',
		province_name: "Département de l'Ouest",
	},
	{
		country_name: 'Haiti',
		province_name: 'Nord-Ouest Department',
	},
	{
		country_name: 'Haiti',
		province_name: 'Centre Department',
	},
	{
		country_name: 'Haiti',
		province_name: 'Département de la Grande-Anse',
	},
	{
		country_name: 'Haiti',
		province_name: 'Département du Sud-Est',
	},
	{
		country_name: 'Honduras',
		province_name: 'Cortés',
	},
	{
		country_name: 'Honduras',
		province_name: 'Copán',
	},
	{
		country_name: 'Honduras',
		province_name: 'Beneficio de Café Memo',
	},
	{
		country_name: 'Honduras',
		province_name: 'Atlántida',
	},
	{
		country_name: 'Honduras',
		province_name: 'Ocotepeque',
	},
	{
		country_name: 'Honduras',
		province_name: 'Colón',
	},
	{
		country_name: 'Honduras',
		province_name: 'Gracias a Dios',
	},
	{
		country_name: 'Honduras',
		province_name: 'Bay Islands',
	},
	{
		country_name: 'Honduras',
		province_name: 'Francisco Morazán',
	},
	{
		country_name: 'Honduras',
		province_name: 'Santa Bárbara',
	},
	{
		country_name: 'Honduras',
		province_name: 'Intibucá',
	},
	{
		country_name: 'Honduras',
		province_name: 'La Paz',
	},
	{
		country_name: 'Honduras',
		province_name: 'Comayagua',
	},
	{
		country_name: 'Honduras',
		province_name: 'Yoro',
	},
	{
		country_name: 'Honduras',
		province_name: 'Choluteca',
	},
	{
		country_name: 'Honduras',
		province_name: 'Valle',
	},
	{
		country_name: 'Honduras',
		province_name: 'El Paraíso',
	},
	{
		country_name: 'Honduras',
		province_name: 'Lempira',
	},
	{
		country_name: 'Honduras',
		province_name: 'Olancho',
	},
	{
		country_name: 'Hungary',
		province_name: 'Great Plain and North',
	},
	{
		country_name: 'Hungary',
		province_name: 'Central Hungary',
	},
	{
		country_name: 'Hungary',
		province_name: 'Transdanubia',
	},
	{
		country_name: 'India',
		province_name: 'Chandigarh',
	},
	{
		country_name: 'India',
		province_name: 'Himachal Pradesh',
	},
	{
		country_name: 'India',
		province_name: 'Chhattisgarh',
	},
	{
		country_name: 'India',
		province_name: 'Tripura',
	},
	{
		country_name: 'India',
		province_name: 'Delhi',
	},
	{
		country_name: 'India',
		province_name: 'Madhya Pradesh',
	},
	{
		country_name: 'India',
		province_name: 'Uttarakhand',
	},
	{
		country_name: 'India',
		province_name: 'Bihar',
	},
	{
		country_name: 'India',
		province_name: 'Kerala',
	},
	{
		country_name: 'India',
		province_name: 'Andhra Pradesh',
	},
	{
		country_name: 'India',
		province_name: 'Haryana',
	},
	{
		country_name: 'India',
		province_name: 'Jammu and Kashmir',
	},
	{
		country_name: 'India',
		province_name: 'Maharashtra',
	},
	{
		country_name: 'India',
		province_name: 'Uttar Pradesh',
	},
	{
		country_name: 'India',
		province_name: 'Tamil Nadu',
	},
	{
		country_name: 'India',
		province_name: 'Assam',
	},
	{
		country_name: 'India',
		province_name: 'Meghalaya',
	},
	{
		country_name: 'India',
		province_name: 'Punjab',
	},
	{
		country_name: 'India',
		province_name: 'Nagaland',
	},
	{
		country_name: 'India',
		province_name: 'Rajasthan',
	},
	{
		country_name: 'India',
		province_name: 'Dadra and Nagar Haveli and Daman and Diu',
	},
	{
		country_name: 'India',
		province_name: 'Andaman and Nicobar Islands',
	},
	{
		country_name: 'India',
		province_name: 'Sikkim',
	},
	{
		country_name: 'India',
		province_name: 'Odisha',
	},
	{
		country_name: 'India',
		province_name: 'Mizoram',
	},
	{
		country_name: 'India',
		province_name: 'Lakshadweep',
	},
	{
		country_name: 'India',
		province_name: 'Gujarat',
	},
	{
		country_name: 'India',
		province_name: 'Goa',
	},
	{
		country_name: 'India',
		province_name: 'Karnataka',
	},
	{
		country_name: 'India',
		province_name: 'Puducherry',
	},
	{
		country_name: 'India',
		province_name: 'Telangana',
	},
	{
		country_name: 'India',
		province_name: 'Manipur',
	},
	{
		country_name: 'Indonesia',
		province_name: 'West Sulawesi',
	},
	{
		country_name: 'Indonesia',
		province_name: 'Central Kalimantan',
	},
	{
		country_name: 'Indonesia',
		province_name: 'West Nusa Tenggara',
	},
	{
		country_name: 'Indonesia',
		province_name: 'South Kalimantan',
	},
	{
		country_name: 'Indonesia',
		province_name: 'South Sulawesi',
	},
	{
		country_name: 'Indonesia',
		province_name: 'Lampung',
	},
	{
		country_name: 'Indonesia',
		province_name: 'Maluku',
	},
	{
		country_name: 'Indonesia',
		province_name: 'North Maluku',
	},
	{
		country_name: 'Indonesia',
		province_name: 'Bangka-Belitung Islands',
	},
	{
		country_name: 'Indonesia',
		province_name: 'Central Java',
	},
	{
		country_name: 'Indonesia',
		province_name: 'East Java',
	},
	{
		country_name: 'Indonesia',
		province_name: 'Bali',
	},
	{
		country_name: 'Indonesia',
		province_name: 'Central Sulawesi',
	},
	{
		country_name: 'Indonesia',
		province_name: 'Aceh',
	},
	{
		country_name: 'Indonesia',
		province_name: 'West Java',
	},
	{
		country_name: 'Indonesia',
		province_name: 'West Papua',
	},
	{
		country_name: 'Indonesia',
		province_name: 'Riau Islands',
	},
	{
		country_name: 'Indonesia',
		province_name: 'East Kalimantan',
	},
	{
		country_name: 'Indonesia',
		province_name: 'North Kalimantan',
	},
	{
		country_name: 'Indonesia',
		province_name: 'Southeast Sulawesi',
	},
	{
		country_name: 'Indonesia',
		province_name: 'Bengkulu',
	},
	{
		country_name: 'Indonesia',
		province_name: 'Special Region of Yogyakarta',
	},
	{
		country_name: 'Indonesia',
		province_name: 'South Sumatra',
	},
	{
		country_name: 'Indonesia',
		province_name: 'North Sumatra',
	},
	{
		country_name: 'Indonesia',
		province_name: 'West Sumatra',
	},
	{
		country_name: 'Indonesia',
		province_name: 'Jambi',
	},
	{
		country_name: 'Indonesia',
		province_name: 'Banten',
	},
	{
		country_name: 'Indonesia',
		province_name: 'Gorontalo',
	},
	{
		country_name: 'Indonesia',
		province_name: 'Papua',
	},
	{
		country_name: 'Indonesia',
		province_name: 'Jakarta Special Capital Region',
	},
	{
		country_name: 'Indonesia',
		province_name: 'North Sulawesi',
	},
	{
		country_name: 'Indonesia',
		province_name: 'West Kalimantan',
	},
	{
		country_name: 'Indonesia',
		province_name: 'Riau',
	},
	{
		country_name: 'Indonesia',
		province_name: 'East Nusa Tenggara',
	},
	{
		country_name: 'Iran',
		province_name: 'Zanjan Province',
	},
	{
		country_name: 'Iran',
		province_name: 'Isfahan Province',
	},
	{
		country_name: 'Iran',
		province_name: 'Gilan Province',
	},
	{
		country_name: 'Iran',
		province_name: 'Hamadan Province',
	},
	{
		country_name: 'Iran',
		province_name: 'Khuzestan Province',
	},
	{
		country_name: 'Iran',
		province_name: 'Fars Province',
	},
	{
		country_name: 'Iran',
		province_name: 'Ardabil Province',
	},
	{
		country_name: 'Iran',
		province_name: 'Qazvin Province',
	},
	{
		country_name: 'Iran',
		province_name: 'North Khorasan Province',
	},
	{
		country_name: 'Iran',
		province_name: 'Tehran Province',
	},
	{
		country_name: 'Iran',
		province_name: 'Alborz Province',
	},
	{
		country_name: 'Iran',
		province_name: 'Sistan and Baluchestan Province',
	},
	{
		country_name: 'Iran',
		province_name: 'West Azerbaijan Province',
	},
	{
		country_name: 'Iran',
		province_name: 'Semnan Province',
	},
	{
		country_name: 'Iran',
		province_name: 'Hormozgan Province',
	},
	{
		country_name: 'Iraq',
		province_name: 'Karbala Governorate',
	},
	{
		country_name: 'Iraq',
		province_name: 'Maysan Governorate',
	},
	{
		country_name: 'Iraq',
		province_name: 'Al-Qadisiyah Governorate',
	},
	{
		country_name: 'Iraq',
		province_name: 'Al-Najaf Governorate',
	},
	{
		country_name: 'Iraq',
		province_name: 'Baghdad Governorate',
	},
	{
		country_name: 'Iraq',
		province_name: 'Al-Basra Governorate',
	},
	{
		country_name: 'Iraq',
		province_name: 'Kirkuk Governorate',
	},
	{
		country_name: 'Iraq',
		province_name: 'Wasit Governorate',
	},
	{
		country_name: 'Iraq',
		province_name: 'Saladin Governorate',
	},
	{
		country_name: 'Iraq',
		province_name: 'Dhi Qar Governorate',
	},
	{
		country_name: 'Iraq',
		province_name: 'Al-Anbar Governorate',
	},
	{
		country_name: 'Iraq',
		province_name: 'Nineveh Governorate',
	},
	{
		country_name: 'Iraq',
		province_name: 'Dohuk Governorate',
	},
	{
		country_name: 'Iraq',
		province_name: 'Halabja Governorate',
	},
	{
		country_name: 'Iraq',
		province_name: 'Babil Governorate',
	},
	{
		country_name: 'Iraq',
		province_name: 'Erbil Governorate',
	},
	{
		country_name: 'Iraq',
		province_name: 'Al-Muthanna Governorate',
	},
	{
		country_name: 'Iraq',
		province_name: 'Diyala Governorate',
	},
	{
		country_name: 'Israel',
		province_name: 'South District',
	},
	{
		country_name: 'Israel',
		province_name: 'Tel Aviv District',
	},
	{
		country_name: 'Israel',
		province_name: 'Haifa District',
	},
	{
		country_name: 'Israel',
		province_name: 'Center District',
	},
	{
		country_name: 'Israel',
		province_name: 'North District',
	},
	{
		country_name: 'Israel',
		province_name: 'Jerusalem District',
	},
	{
		country_name: 'Italy',
		province_name: 'Apulia',
	},
	{
		country_name: 'Italy',
		province_name: 'Umbria',
	},
	{
		country_name: 'Italy',
		province_name: 'Sardinia',
	},
	{
		country_name: 'Italy',
		province_name: 'Trentino-Alto Adige/Südtirol',
	},
	{
		country_name: 'Italy',
		province_name: 'Sicily',
	},
	{
		country_name: 'Italy',
		province_name: 'Marche',
	},
	{
		country_name: 'Italy',
		province_name: 'Basilicata',
	},
	{
		country_name: 'Italy',
		province_name: 'Emilia-Romagna',
	},
	{
		country_name: 'Italy',
		province_name: 'Campania',
	},
	{
		country_name: 'Italy',
		province_name: 'Abruzzo',
	},
	{
		country_name: 'Italy',
		province_name: 'Aosta Valley',
	},
	{
		country_name: 'Italy',
		province_name: 'Molise',
	},
	{
		country_name: 'Italy',
		province_name: 'Calabria',
	},
	{
		country_name: 'Italy',
		province_name: 'Piemont',
	},
	{
		country_name: 'Italy',
		province_name: 'Friuli Venezia Giulia',
	},
	{
		country_name: 'Italy',
		province_name: 'Lombardy',
	},
	{
		country_name: 'Italy',
		province_name: 'Liguria',
	},
	{
		country_name: 'Italy',
		province_name: 'Lazio',
	},
	{
		country_name: 'Italy',
		province_name: 'Tuscany',
	},
	{
		country_name: 'Italy',
		province_name: 'Veneto',
	},
	{
		country_name: 'Japan',
		province_name: 'Nara Prefecture',
	},
	{
		country_name: 'Japan',
		province_name: 'Osaka Prefecture',
	},
	{
		country_name: 'Japan',
		province_name: 'Yamanashi Prefecture',
	},
	{
		country_name: 'Japan',
		province_name: 'Tokushima Prefecture',
	},
	{
		country_name: 'Japan',
		province_name: 'Nagano Prefecture',
	},
	{
		country_name: 'Japan',
		province_name: 'Kochi Prefecture',
	},
	{
		country_name: 'Japan',
		province_name: 'Gunma Prefecture',
	},
	{
		country_name: 'Japan',
		province_name: 'Tochigi Prefecture',
	},
	{
		country_name: 'Japan',
		province_name: 'Akita Prefecture',
	},
	{
		country_name: 'Japan',
		province_name: 'Mie Prefecture',
	},
	{
		country_name: 'Japan',
		province_name: 'Ehime Prefecture',
	},
	{
		country_name: 'Japan',
		province_name: 'Miyagi Prefecture',
	},
	{
		country_name: 'Japan',
		province_name: 'Chiba Prefecture',
	},
	{
		country_name: 'Japan',
		province_name: 'Hokkaido Prefecture',
	},
	{
		country_name: 'Japan',
		province_name: 'Iwate Prefecture',
	},
	{
		country_name: 'Japan',
		province_name: 'Aomori Prefecture',
	},
	{
		country_name: 'Japan',
		province_name: 'Oita Prefecture',
	},
	{
		country_name: 'Japan',
		province_name: 'Shiga Prefecture',
	},
	{
		country_name: 'Japan',
		province_name: 'Fukushima Prefecture',
	},
	{
		country_name: 'Japan',
		province_name: 'Kumamoto Prefecture',
	},
	{
		country_name: 'Japan',
		province_name: 'Fukuoka Prefecture',
	},
	{
		country_name: 'Japan',
		province_name: 'Okinawa Prefecture',
	},
	{
		country_name: 'Japan',
		province_name: 'Saga Prefecture',
	},
	{
		country_name: 'Japan',
		province_name: 'Wakayama Prefecture',
	},
	{
		country_name: 'Japan',
		province_name: 'Saitama Prefecture',
	},
	{
		country_name: 'Japan',
		province_name: 'Ishikawa Prefecture',
	},
	{
		country_name: 'Japan',
		province_name: 'Kagoshima Prefecture',
	},
	{
		country_name: 'Japan',
		province_name: 'Aichi Prefecture',
	},
	{
		country_name: 'Japan',
		province_name: 'Yamaguchi Prefecture',
	},
	{
		country_name: 'Japan',
		province_name: 'Kagawa Prefecture',
	},
	{
		country_name: 'Japan',
		province_name: 'Fukui Prefecture',
	},
	{
		country_name: 'Japan',
		province_name: 'Tottori Prefecture',
	},
	{
		country_name: 'Japan',
		province_name: 'Tokyo',
	},
	{
		country_name: 'Japan',
		province_name: 'Shizuoka Prefecture',
	},
	{
		country_name: 'Japan',
		province_name: 'Shimane Prefecture',
	},
	{
		country_name: 'Japan',
		province_name: 'Niigata Prefecture',
	},
	{
		country_name: 'Japan',
		province_name: 'Yamagata Prefecture',
	},
	{
		country_name: 'Japan',
		province_name: 'Miyazaki Prefecture',
	},
	{
		country_name: 'Japan',
		province_name: 'Hiroshima Prefecture',
	},
	{
		country_name: 'Japan',
		province_name: 'Kyoto Prefecture',
	},
	{
		country_name: 'Japan',
		province_name: 'Kanagawa Prefecture',
	},
	{
		country_name: 'Japan',
		province_name: 'Ibaraki Prefecture',
	},
	{
		country_name: 'Japan',
		province_name: 'Toyama Prefecture',
	},
	{
		country_name: 'Japan',
		province_name: 'Nagasaki Prefecture',
	},
	{
		country_name: 'Japan',
		province_name: 'Okayama Prefecture',
	},
	{
		country_name: 'Japan',
		province_name: 'Hyogo Prefecture',
	},
	{
		country_name: 'Japan',
		province_name: 'Gifu Prefecture',
	},
	{
		country_name: 'Jordan',
		province_name: 'Ajlun',
	},
	{
		country_name: 'Jordan',
		province_name: 'Mafraq',
	},
	{
		country_name: 'Jordan',
		province_name: 'Madaba',
	},
	{
		country_name: 'Jordan',
		province_name: 'Jarash',
	},
	{
		country_name: 'Jordan',
		province_name: 'Aqaba',
	},
	{
		country_name: 'Jordan',
		province_name: 'Irbid',
	},
	{
		country_name: 'Jordan',
		province_name: 'Zarqa',
	},
	{
		country_name: 'Jordan',
		province_name: 'Balqa',
	},
	{
		country_name: 'Jordan',
		province_name: 'Karak',
	},
	{
		country_name: 'Jordan',
		province_name: 'Amman',
	},
	{
		country_name: 'Jordan',
		province_name: 'Tafilah',
	},
	{
		country_name: 'Jordan',
		province_name: 'Maan',
	},
	{
		country_name: 'Kazakhstan',
		province_name: 'Mangystau Region',
	},
	{
		country_name: 'Kazakhstan',
		province_name: 'Atyrau Region',
	},
	{
		country_name: 'Kazakhstan',
		province_name: 'Kyzylorda Region',
	},
	{
		country_name: 'Kazakhstan',
		province_name: 'Almaty',
	},
	{
		country_name: 'Kazakhstan',
		province_name: 'Jambyl Region',
	},
	{
		country_name: 'Kazakhstan',
		province_name: 'Pavlodar Region',
	},
	{
		country_name: 'Kazakhstan',
		province_name: 'West Kazakhstan Region',
	},
	{
		country_name: 'Kazakhstan',
		province_name: 'Nur-Sultan',
	},
	{
		country_name: 'Kazakhstan',
		province_name: 'North Kazakhstan Region',
	},
	{
		country_name: 'Kazakhstan',
		province_name: 'Almaty Region',
	},
	{
		country_name: 'Kazakhstan',
		province_name: 'Turkistan Region',
	},
	{
		country_name: 'Kazakhstan',
		province_name: 'Aktobe Region',
	},
	{
		country_name: 'Kazakhstan',
		province_name: 'Шымкент',
	},
	{
		country_name: 'Kazakhstan',
		province_name: 'East Kazakhstan Region',
	},
	{
		country_name: 'Kazakhstan',
		province_name: 'Akmola Region',
	},
	{
		country_name: 'Kazakhstan',
		province_name: 'Karaganda Region',
	},
	{
		country_name: 'Kazakhstan',
		province_name: 'Kostanay Region',
	},
	{
		country_name: 'Kenya',
		province_name: 'Nairobi',
	},
	{
		country_name: 'Kenya',
		province_name: 'Trans Nzoia',
	},
	{
		country_name: 'Kenya',
		province_name: 'Tharaka-Nithi',
	},
	{
		country_name: 'Kenya',
		province_name: 'Mombasa',
	},
	{
		country_name: 'Kenya',
		province_name: 'Lamu',
	},
	{
		country_name: 'Kenya',
		province_name: 'Nandi',
	},
	{
		country_name: 'Kenya',
		province_name: 'Migori',
	},
	{
		country_name: 'Kenya',
		province_name: 'Garissa County',
	},
	{
		country_name: 'Kenya',
		province_name: 'Nyeri',
	},
	{
		country_name: 'Kenya',
		province_name: 'Meru',
	},
	{
		country_name: 'Kenya',
		province_name: 'Turkana',
	},
	{
		country_name: 'Kenya',
		province_name: 'Busia',
	},
	{
		country_name: 'Kenya',
		province_name: 'Vihiga',
	},
	{
		country_name: 'Kenya',
		province_name: 'Kisumu',
	},
	{
		country_name: 'Kenya',
		province_name: 'Siaya',
	},
	{
		country_name: 'Kenya',
		province_name: 'Nyamira',
	},
	{
		country_name: 'Kenya',
		province_name: 'Marsabit',
	},
	{
		country_name: 'Kenya',
		province_name: 'Samburu',
	},
	{
		country_name: 'Kenya',
		province_name: 'Kericho',
	},
	{
		country_name: 'Kenya',
		province_name: 'Embu County',
	},
	{
		country_name: 'Kenya',
		province_name: 'Kisii',
	},
	{
		country_name: 'Kenya',
		province_name: 'Mandera',
	},
	{
		country_name: 'Kenya',
		province_name: 'Kirinyaga County',
	},
	{
		country_name: 'Kenya',
		province_name: 'Homa Bay',
	},
	{
		country_name: 'Kenya',
		province_name: 'Isiolo County',
	},
	{
		country_name: 'Kenya',
		province_name: 'Narok',
	},
	{
		country_name: 'Kenya',
		province_name: 'Wajir',
	},
	{
		country_name: 'Kenya',
		province_name: 'Nyandarua',
	},
	{
		country_name: 'Kenya',
		province_name: 'Kajiado County',
	},
	{
		country_name: 'Kenya',
		province_name: 'Nakuru',
	},
	{
		country_name: 'Kenya',
		province_name: 'Kakamega',
	},
	{
		country_name: 'Kenya',
		province_name: 'Machakos',
	},
	{
		country_name: 'Kenya',
		province_name: 'Baringo',
	},
	{
		country_name: 'Kenya',
		province_name: 'Uasin Gishu',
	},
	{
		country_name: 'Kenya',
		province_name: 'Bomet',
	},
	{
		country_name: 'Kenya',
		province_name: 'Elgeyo-Marakwet',
	},
	{
		country_name: 'Kenya',
		province_name: 'Kitui',
	},
	{
		country_name: 'Kenya',
		province_name: 'Kilifi',
	},
	{
		country_name: 'Kenya',
		province_name: 'Taita Taveta',
	},
	{
		country_name: 'Kenya',
		province_name: 'Murang`a',
	},
	{
		country_name: 'Kenya',
		province_name: 'Kwale',
	},
	{
		country_name: 'Kenya',
		province_name: 'West Pokot',
	},
	{
		country_name: 'Kenya',
		province_name: 'Kiambu County',
	},
	{
		country_name: 'Kenya',
		province_name: 'Tana River',
	},
	{
		country_name: 'Kenya',
		province_name: 'Bungoma',
	},
	{
		country_name: 'Kenya',
		province_name: 'Laikipia',
	},
	{
		country_name: 'Kenya',
		province_name: 'Makueni',
	},
	{
		country_name: 'Kuwait',
		province_name: 'Farwaniya',
	},
	{
		country_name: 'Kuwait',
		province_name: 'Jahra',
	},
	{
		country_name: 'Kuwait',
		province_name: 'Mubarak Al-Kabeer',
	},
	{
		country_name: 'Kuwait',
		province_name: 'Hawalli',
	},
	{
		country_name: 'Kuwait',
		province_name: 'Ahmadi',
	},
	{
		country_name: 'Kuwait',
		province_name: 'Al Asimah',
	},
	{
		country_name: 'Kyrgyzstan',
		province_name: 'Issyk-Kul Region',
	},
	{
		country_name: 'Kyrgyzstan',
		province_name: 'Batken Region',
	},
	{
		country_name: 'Kyrgyzstan',
		province_name: 'Osh Region',
	},
	{
		country_name: 'Kyrgyzstan',
		province_name: 'Jalal-Abad Region',
	},
	{
		country_name: 'Kyrgyzstan',
		province_name: 'Talas Region',
	},
	{
		country_name: 'Kyrgyzstan',
		province_name: 'Chuy Region',
	},
	{
		country_name: 'Kyrgyzstan',
		province_name: 'Naryn Region',
	},
	{
		country_name: 'Kyrgyzstan',
		province_name: 'Bishkek',
	},
	{
		country_name: 'Kyrgyzstan',
		province_name: 'City of Osh',
	},
	{
		country_name: 'Laos',
		province_name: 'Luang Prabang',
	},
	{
		country_name: 'Laos',
		province_name: 'Houaphanh',
	},
	{
		country_name: 'Laos',
		province_name: 'Luang Namtha',
	},
	{
		country_name: 'Laos',
		province_name: 'Sekong Province',
	},
	{
		country_name: 'Laos',
		province_name: 'Vientiane Prefecture',
	},
	{
		country_name: 'Laos',
		province_name: 'Champasak Province',
	},
	{
		country_name: 'Laos',
		province_name: 'Oudomxay',
	},
	{
		country_name: 'Laos',
		province_name: 'Vientiane Province',
	},
	{
		country_name: 'Laos',
		province_name: 'Phongsaly',
	},
	{
		country_name: 'Laos',
		province_name: 'Sainyabuli Province',
	},
	{
		country_name: 'Laos',
		province_name: 'Attapeu',
	},
	{
		country_name: 'Laos',
		province_name: 'Bolikhamsai',
	},
	{
		country_name: 'Laos',
		province_name: 'Xaisomboun Province',
	},
	{
		country_name: 'Laos',
		province_name: 'Salavan Province',
	},
	{
		country_name: 'Laos',
		province_name: 'Xiangkhouang Province',
	},
	{
		country_name: 'Laos',
		province_name: 'Bokeo Province',
	},
	{
		country_name: 'Laos',
		province_name: 'Khammouane',
	},
	{
		country_name: 'Laos',
		province_name: 'Savannakhet Province',
	},
	{
		country_name: 'Latvia',
		province_name: 'Courland',
	},
	{
		country_name: 'Latvia',
		province_name: 'Vidzeme',
	},
	{
		country_name: 'Latvia',
		province_name: 'Latgale',
	},
	{
		country_name: 'Latvia',
		province_name: 'Zemgale',
	},
	{
		country_name: 'Lebanon',
		province_name: 'Akkar Governorate',
	},
	{
		country_name: 'Lebanon',
		province_name: 'Nabatiya Governorate',
	},
	{
		country_name: 'Lebanon',
		province_name: 'Beqaa Governorate',
	},
	{
		country_name: 'Lebanon',
		province_name: 'Beirut Governorate',
	},
	{
		country_name: 'Lebanon',
		province_name: 'North Governorate',
	},
	{
		country_name: 'Lebanon',
		province_name: 'Baalbek-Hermel Governorate',
	},
	{
		country_name: 'Lebanon',
		province_name: 'Mount Lebanon Governorate',
	},
	{
		country_name: 'Lebanon',
		province_name: 'South Governorate',
	},
	{
		country_name: 'Liberia',
		province_name: 'Nimba County',
	},
	{
		country_name: 'Liberia',
		province_name: 'Grand Gedeh County',
	},
	{
		country_name: 'Liberia',
		province_name: 'Margibi County',
	},
	{
		country_name: 'Liberia',
		province_name: 'Grand Cape Mount County',
	},
	{
		country_name: 'Liberia',
		province_name: 'Montserrado County',
	},
	{
		country_name: 'Liberia',
		province_name: 'Sinoe County',
	},
	{
		country_name: 'Liberia',
		province_name: 'River Cess County',
	},
	{
		country_name: 'Liberia',
		province_name: 'Gbarpolu County',
	},
	{
		country_name: 'Liberia',
		province_name: 'Lofa County',
	},
	{
		country_name: 'Liberia',
		province_name: 'Maryland County',
	},
	{
		country_name: 'Liberia',
		province_name: 'Bong County',
	},
	{
		country_name: 'Liberia',
		province_name: 'Bomi County',
	},
	{
		country_name: 'Liberia',
		province_name: 'Grand Kru County',
	},
	{
		country_name: 'Liberia',
		province_name: 'Grand Bassa County',
	},
	{
		country_name: 'Liberia',
		province_name: 'River Gee County',
	},
	{
		country_name: 'Libya',
		province_name: 'Tripoli',
	},
	{
		country_name: 'Libya',
		province_name: 'Sabha',
	},
	{
		country_name: 'Libya',
		province_name: 'Marj',
	},
	{
		country_name: 'Libya',
		province_name: 'Wadi al Hayaa',
	},
	{
		country_name: 'Libya',
		province_name: 'Zawiya',
	},
	{
		country_name: 'Libya',
		province_name: 'Murzuq',
	},
	{
		country_name: 'Libya',
		province_name: 'Jafara',
	},
	{
		country_name: 'Libya',
		province_name: 'Ghat',
	},
	{
		country_name: 'Libya',
		province_name: 'Butnan',
	},
	{
		country_name: 'Libya',
		province_name: 'Jufra',
	},
	{
		country_name: 'Libya',
		province_name: 'Sirte',
	},
	{
		country_name: 'Libya',
		province_name: 'Derna',
	},
	{
		country_name: 'Libya',
		province_name: 'Wadi al Shatii',
	},
	{
		country_name: 'Libya',
		province_name: 'Jabal al Gharbi',
	},
	{
		country_name: 'Libya',
		province_name: 'Nalut',
	},
	{
		country_name: 'Libya',
		province_name: 'Nuqat al Khams',
	},
	{
		country_name: 'Libya',
		province_name: 'Murqub',
	},
	{
		country_name: 'Libya',
		province_name: 'Benghazi',
	},
	{
		country_name: 'Libya',
		province_name: 'Al Wahat',
	},
	{
		country_name: 'Libya',
		province_name: 'Kufra',
	},
	{
		country_name: 'Libya',
		province_name: 'Jabal al Akhdar',
	},
	{
		country_name: 'Lithuania',
		province_name: 'Utena County',
	},
	{
		country_name: 'Lithuania',
		province_name: 'Taurage County',
	},
	{
		country_name: 'Lithuania',
		province_name: 'Panevezys County',
	},
	{
		country_name: 'Lithuania',
		province_name: 'Klaipeda County',
	},
	{
		country_name: 'Lithuania',
		province_name: 'Alytus County',
	},
	{
		country_name: 'Lithuania',
		province_name: 'Marijampole County',
	},
	{
		country_name: 'Lithuania',
		province_name: 'Kaunas County',
	},
	{
		country_name: 'Lithuania',
		province_name: 'Siauliai County',
	},
	{
		country_name: 'Lithuania',
		province_name: 'Vilnius County',
	},
	{
		country_name: 'Lithuania',
		province_name: 'Telsiai County',
	},
	{
		country_name: 'Madagascar',
		province_name: "Amoron'i Mania",
	},
	{
		country_name: 'Madagascar',
		province_name: 'Anosy',
	},
	{
		country_name: 'Madagascar',
		province_name: 'Alaotra-Mangoro',
	},
	{
		country_name: 'Madagascar',
		province_name: 'Bongolava',
	},
	{
		country_name: 'Madagascar',
		province_name: 'Vakinankaratra',
	},
	{
		country_name: 'Madagascar',
		province_name: 'Androy',
	},
	{
		country_name: 'Madagascar',
		province_name: 'Atsinanana',
	},
	{
		country_name: 'Madagascar',
		province_name: 'Melaky',
	},
	{
		country_name: 'Madagascar',
		province_name: 'Atsimo-Andrefana',
	},
	{
		country_name: 'Madagascar',
		province_name: 'Sava',
	},
	{
		country_name: 'Madagascar',
		province_name: 'Analanjirofo',
	},
	{
		country_name: 'Madagascar',
		province_name: 'Betsiboka',
	},
	{
		country_name: 'Madagascar',
		province_name: 'Menabe',
	},
	{
		country_name: 'Madagascar',
		province_name: 'Sofia',
	},
	{
		country_name: 'Madagascar',
		province_name: 'Ihorombe',
	},
	{
		country_name: 'Madagascar',
		province_name: 'Analamanga',
	},
	{
		country_name: 'Madagascar',
		province_name: 'Boeny',
	},
	{
		country_name: 'Madagascar',
		province_name: 'Itasy',
	},
	{
		country_name: 'Madagascar',
		province_name: 'Vatovavy-Fitovinany',
	},
	{
		country_name: 'Madagascar',
		province_name: 'Atsimo-Atsinanana',
	},
	{
		country_name: 'Madagascar',
		province_name: 'Diana',
	},
	{
		country_name: 'Madagascar',
		province_name: 'Matsiatra Ambony',
	},
	{
		country_name: 'Malawi',
		province_name: 'Nkhata Bay',
	},
	{
		country_name: 'Malawi',
		province_name: 'Ntchisi',
	},
	{
		country_name: 'Malawi',
		province_name: 'Kasungu',
	},
	{
		country_name: 'Malawi',
		province_name: 'Salima',
	},
	{
		country_name: 'Malawi',
		province_name: 'Mchinji',
	},
	{
		country_name: 'Malawi',
		province_name: 'Mzimba',
	},
	{
		country_name: 'Malawi',
		province_name: 'Rumphi',
	},
	{
		country_name: 'Malawi',
		province_name: 'Nkhotakota',
	},
	{
		country_name: 'Malawi',
		province_name: 'Dedza',
	},
	{
		country_name: 'Malawi',
		province_name: 'Ntcheu',
	},
	{
		country_name: 'Malawi',
		province_name: 'Likoma',
	},
	{
		country_name: 'Malawi',
		province_name: 'Karonga',
	},
	{
		country_name: 'Malawi',
		province_name: 'Mulanje',
	},
	{
		country_name: 'Malawi',
		province_name: 'Blantyre',
	},
	{
		country_name: 'Malawi',
		province_name: 'Chiradzulu',
	},
	{
		country_name: 'Malawi',
		province_name: 'Chikwawa',
	},
	{
		country_name: 'Malawi',
		province_name: 'Machinga',
	},
	{
		country_name: 'Malawi',
		province_name: 'Zomba',
	},
	{
		country_name: 'Malawi',
		province_name: 'Chitipa',
	},
	{
		country_name: 'Malawi',
		province_name: 'Phalombe',
	},
	{
		country_name: 'Malawi',
		province_name: 'Balaka',
	},
	{
		country_name: 'Malawi',
		province_name: 'Thyolo',
	},
	{
		country_name: 'Malawi',
		province_name: 'Mwanza',
	},
	{
		country_name: 'Malawi',
		province_name: 'Dowa',
	},
	{
		country_name: 'Malawi',
		province_name: 'Mangochi',
	},
	{
		country_name: 'Malawi',
		province_name: 'Nsanje',
	},
	{
		country_name: 'Malawi',
		province_name: 'Lilongwe',
	},
	{
		country_name: 'Malawi',
		province_name: 'Neno',
	},
	{
		country_name: 'Malaysia',
		province_name: 'Terengganu',
	},
	{
		country_name: 'Malaysia',
		province_name: 'Johor',
	},
	{
		country_name: 'Malaysia',
		province_name: 'Penang',
	},
	{
		country_name: 'Malaysia',
		province_name: 'Selangor',
	},
	{
		country_name: 'Malaysia',
		province_name: 'Kelantan',
	},
	{
		country_name: 'Malaysia',
		province_name: 'Putrajaya',
	},
	{
		country_name: 'Malaysia',
		province_name: 'Perlis',
	},
	{
		country_name: 'Malaysia',
		province_name: 'Perak',
	},
	{
		country_name: 'Malaysia',
		province_name: 'Pahang',
	},
	{
		country_name: 'Malaysia',
		province_name: 'Sabah',
	},
	{
		country_name: 'Malaysia',
		province_name: 'Kuala Lumpur',
	},
	{
		country_name: 'Malaysia',
		province_name: 'Labuan',
	},
	{
		country_name: 'Malaysia',
		province_name: 'Sarawak',
	},
	{
		country_name: 'Malaysia',
		province_name: 'Negeri Sembilan',
	},
	{
		country_name: 'Malaysia',
		province_name: 'Malacca',
	},
	{
		country_name: 'Malaysia',
		province_name: 'Kedah',
	},
	{
		country_name: 'Maldives',
		province_name: 'Thaa',
	},
	{
		country_name: 'Maldives',
		province_name: 'Gnaviyani',
	},
	{
		country_name: 'Maldives',
		province_name: 'Haa Dhaalu',
	},
	{
		country_name: 'Maldives',
		province_name: 'Baa',
	},
	{
		country_name: 'Maldives',
		province_name: 'Laamu',
	},
	{
		country_name: 'Maldives',
		province_name: 'Meemu',
	},
	{
		country_name: 'Maldives',
		province_name: 'Shaviyani',
	},
	{
		country_name: 'Maldives',
		province_name: 'Lhaviyani',
	},
	{
		country_name: 'Maldives',
		province_name: 'Alif Dhaalu',
	},
	{
		country_name: 'Maldives',
		province_name: 'Dhaalu',
	},
	{
		country_name: 'Maldives',
		province_name: 'Malé',
	},
	{
		country_name: 'Maldives',
		province_name: 'Addu',
	},
	{
		country_name: 'Maldives',
		province_name: 'Faafu',
	},
	{
		country_name: 'Maldives',
		province_name: 'Gaafu Alif',
	},
	{
		country_name: 'Maldives',
		province_name: 'Haa Alif',
	},
	{
		country_name: 'Maldives',
		province_name: 'Alif Alif',
	},
	{
		country_name: 'Maldives',
		province_name: 'Vaavu',
	},
	{
		country_name: 'Maldives',
		province_name: 'Kaafu',
	},
	{
		country_name: 'Maldives',
		province_name: 'Gaafu Dhaalu',
	},
	{
		country_name: 'Maldives',
		province_name: 'Noonu',
	},
	{
		country_name: 'Maldives',
		province_name: 'Raa',
	},
	{
		country_name: 'Mali',
		province_name: 'Kidal',
	},
	{
		country_name: 'Mali',
		province_name: 'Kayes',
	},
	{
		country_name: 'Mali',
		province_name: 'Koulikoro',
	},
	{
		country_name: 'Mali',
		province_name: 'Gao',
	},
	{
		country_name: 'Mali',
		province_name: 'Bamako',
	},
	{
		country_name: 'Mali',
		province_name: 'Ménaka',
	},
	{
		country_name: 'Mali',
		province_name: 'Sikasso',
	},
	{
		country_name: 'Mali',
		province_name: 'Timbuktu',
	},
	{
		country_name: 'Malta',
		province_name: 'Gozo Region',
	},
	{
		country_name: 'Malta',
		province_name: 'Northern Region',
	},
	{
		country_name: 'Malta',
		province_name: 'Southern Region',
	},
	{
		country_name: 'Malta',
		province_name: 'South Eastern Region',
	},
	{
		country_name: 'Malta',
		province_name: 'Central Region',
	},
	{
		country_name: 'Mauritania',
		province_name: 'Nouakchott',
	},
	{
		country_name: 'Mauritania',
		province_name: 'Wilaya Dakhlet Nouadhibou',
	},
	{
		country_name: 'Mauritania',
		province_name: 'Tiris Zemmour',
	},
	{
		country_name: 'Mauritania',
		province_name: 'Assaba',
	},
	{
		country_name: 'Mauritania',
		province_name: 'Inchiri',
	},
	{
		country_name: 'Mauritania',
		province_name: 'Brakna',
	},
	{
		country_name: 'Mauritania',
		province_name: 'Trarza',
	},
	{
		country_name: 'Mauritania',
		province_name: 'Adrar',
	},
	{
		country_name: 'Mauritania',
		province_name: 'Gorgol',
	},
	{
		country_name: 'Mauritania',
		province_name: 'Hodh Ech Chargui',
	},
	{
		country_name: 'Mauritania',
		province_name: 'Tagant',
	},
	{
		country_name: 'Mauritania',
		province_name: 'Guidimaka',
	},
	{
		country_name: 'Mauritania',
		province_name: 'Hodh El Gharbi',
	},
	{
		country_name: 'Mauritius',
		province_name: 'Flacq',
	},
	{
		country_name: 'Mauritius',
		province_name: 'Rivière du Rempart',
	},
	{
		country_name: 'Mauritius',
		province_name: 'Port Louis',
	},
	{
		country_name: 'Mauritius',
		province_name: 'Rodrigues',
	},
	{
		country_name: 'Mauritius',
		province_name: 'Savanne',
	},
	{
		country_name: 'Mauritius',
		province_name: 'Grand Port',
	},
	{
		country_name: 'Mauritius',
		province_name: 'Moka',
	},
	{
		country_name: 'Mauritius',
		province_name: 'Plaines Wilhems',
	},
	{
		country_name: 'Mauritius',
		province_name: 'Black River',
	},
	{
		country_name: 'Mauritius',
		province_name: 'Pamplemousses',
	},
	{
		country_name: 'Mexico',
		province_name: 'Zacatecas',
	},
	{
		country_name: 'Mexico',
		province_name: 'Colima',
	},
	{
		country_name: 'Mexico',
		province_name: 'State of Mexico',
	},
	{
		country_name: 'Mexico',
		province_name: 'Campeche',
	},
	{
		country_name: 'Mexico',
		province_name: 'Durango',
	},
	{
		country_name: 'Mexico',
		province_name: 'Tlaxcala',
	},
	{
		country_name: 'Mexico',
		province_name: 'Michoacán',
	},
	{
		country_name: 'Mexico',
		province_name: 'Querétaro',
	},
	{
		country_name: 'Mexico',
		province_name: 'Yucatán',
	},
	{
		country_name: 'Mexico',
		province_name: 'Hidalgo',
	},
	{
		country_name: 'Mexico',
		province_name: 'Chihuahua',
	},
	{
		country_name: 'Mexico',
		province_name: 'Nayarit',
	},
	{
		country_name: 'Mexico',
		province_name: 'Guanajuato',
	},
	{
		country_name: 'Mexico',
		province_name: 'Jalisco',
	},
	{
		country_name: 'Mexico',
		province_name: 'Quintana Roo',
	},
	{
		country_name: 'Mexico',
		province_name: 'Oaxaca',
	},
	{
		country_name: 'Mexico',
		province_name: 'Tabasco',
	},
	{
		country_name: 'Mexico',
		province_name: 'Chiapas',
	},
	{
		country_name: 'Mexico',
		province_name: 'Coahuila',
	},
	{
		country_name: 'Mexico',
		province_name: 'Isla Isabela',
	},
	{
		country_name: 'Mexico',
		province_name: 'Baja California',
	},
	{
		country_name: 'Mexico',
		province_name: 'Guerrero',
	},
	{
		country_name: 'Mexico',
		province_name: 'Tamaulipas',
	},
	{
		country_name: 'Mexico',
		province_name: 'Sinaloa',
	},
	{
		country_name: 'Mexico',
		province_name: 'Nuevo León',
	},
	{
		country_name: 'Mexico',
		province_name: 'Baja California Sur',
	},
	{
		country_name: 'Mexico',
		province_name: 'Sonora',
	},
	{
		country_name: 'Mexico',
		province_name: 'San Luis Potosi',
	},
	{
		country_name: 'Mexico',
		province_name: 'Aguascalientes',
	},
	{
		country_name: 'Mexico',
		province_name: 'Morelos',
	},
	{
		country_name: 'Mexico',
		province_name: 'Veracruz',
	},
	{
		country_name: 'Mexico',
		province_name: 'Mexico City',
	},
	{
		country_name: 'Mexico',
		province_name: 'Puebla',
	},
	{
		country_name: 'Moldova',
		province_name: 'Criuleni District',
	},
	{
		country_name: 'Moldova',
		province_name: 'Edineț District',
	},
	{
		country_name: 'Moldova',
		province_name: 'Sîngerei District',
	},
	{
		country_name: 'Moldova',
		province_name: 'Ungheni District',
	},
	{
		country_name: 'Moldova',
		province_name: 'Gagauzia',
	},
	{
		country_name: 'Moldova',
		province_name: 'Ialoveni District',
	},
	{
		country_name: 'Moldova',
		province_name: 'Basarabeasca District',
	},
	{
		country_name: 'Moldova',
		province_name: 'Telenești District',
	},
	{
		country_name: 'Moldova',
		province_name: 'Fălești District',
	},
	{
		country_name: 'Moldova',
		province_name: 'Cahul District',
	},
	{
		country_name: 'Moldova',
		province_name: 'Bălți Municipality',
	},
	{
		country_name: 'Moldova',
		province_name: 'Căușeni District',
	},
	{
		country_name: 'Moldova',
		province_name: 'Rezina District',
	},
	{
		country_name: 'Moldova',
		province_name: 'Soroca District',
	},
	{
		country_name: 'Moldova',
		province_name: 'Hîncești District',
	},
	{
		country_name: 'Moldova',
		province_name: 'Anenii Noi District',
	},
	{
		country_name: 'Moldova',
		province_name: 'Nisporeni District',
	},
	{
		country_name: 'Moldova',
		province_name: 'Strășeni District',
	},
	{
		country_name: 'Moldova',
		province_name: 'Leova District',
	},
	{
		country_name: 'Moldova',
		province_name: 'Cantemir District',
	},
	{
		country_name: 'Moldova',
		province_name: 'Drochia District',
	},
	{
		country_name: 'Moldova',
		province_name: 'Cimișlia District',
	},
	{
		country_name: 'Moldova',
		province_name: 'Șoldănești District',
	},
	{
		country_name: 'Moldova',
		province_name: 'Taraclia District',
	},
	{
		country_name: 'Moldova',
		province_name: 'Calarași District',
	},
	{
		country_name: 'Moldova',
		province_name: 'Florești District',
	},
	{
		country_name: 'Moldova',
		province_name: 'Chișinău Municipality',
	},
	{
		country_name: 'Moldova',
		province_name: 'Bender Municipality',
	},
	{
		country_name: 'Moldova',
		province_name: 'Dubăsari District',
	},
	{
		country_name: 'Moldova',
		province_name: 'Administrative-Territorial Units from the Left Bank of the Dniester',
	},
	{
		country_name: 'Moldova',
		province_name: 'Glodeni District',
	},
	{
		country_name: 'Moldova',
		province_name: 'Dondușeni District',
	},
	{
		country_name: 'Moldova',
		province_name: 'Ocnița District',
	},
	{
		country_name: 'Moldova',
		province_name: 'Rîșcani District',
	},
	{
		country_name: 'Moldova',
		province_name: 'Ștefan Vodă District',
	},
	{
		country_name: 'Moldova',
		province_name: 'Briceni District',
	},
	{
		country_name: 'Moldova',
		province_name: 'Orhei District',
	},
	{
		country_name: 'Mongolia',
		province_name: 'Sükhbaatar',
	},
	{
		country_name: 'Mongolia',
		province_name: 'Darkhan-Uul',
	},
	{
		country_name: 'Mongolia',
		province_name: 'Khentii',
	},
	{
		country_name: 'Mongolia',
		province_name: 'Zavkhan',
	},
	{
		country_name: 'Mongolia',
		province_name: 'Dundgovi',
	},
	{
		country_name: 'Mongolia',
		province_name: 'Dornogovi',
	},
	{
		country_name: 'Mongolia',
		province_name: 'Dornod',
	},
	{
		country_name: 'Mongolia',
		province_name: 'Bayan-Ölgii',
	},
	{
		country_name: 'Mongolia',
		province_name: 'Bulgan',
	},
	{
		country_name: 'Mongolia',
		province_name: 'Uvs',
	},
	{
		country_name: 'Mongolia',
		province_name: 'Hovsgel',
	},
	{
		country_name: 'Mongolia',
		province_name: 'Töv',
	},
	{
		country_name: 'Mongolia',
		province_name: 'Orkhon',
	},
	{
		country_name: 'Mongolia',
		province_name: 'Ömnögovi',
	},
	{
		country_name: 'Mongolia',
		province_name: 'Govi-Altai',
	},
	{
		country_name: 'Mongolia',
		province_name: 'Arkhangai',
	},
	{
		country_name: 'Mongolia',
		province_name: 'Övörkhangai',
	},
	{
		country_name: 'Mongolia',
		province_name: 'Khovd',
	},
	{
		country_name: 'Mongolia',
		province_name: 'Ulaanbaatar',
	},
	{
		country_name: 'Mongolia',
		province_name: 'Govisumber',
	},
	{
		country_name: 'Mongolia',
		province_name: 'Selenge',
	},
	{
		country_name: 'Mongolia',
		province_name: 'Bayankhongor',
	},
	{
		country_name: 'Morocco',
		province_name: 'Béni Mellal-Khénifra',
	},
	{
		country_name: 'Morocco',
		province_name: 'Souss-Massa',
	},
	{
		country_name: 'Morocco',
		province_name: 'Tangier-Tetouan-Al Hoceima',
	},
	{
		country_name: 'Morocco',
		province_name: 'Drâa-Tafilalet',
	},
	{
		country_name: 'Morocco',
		province_name: 'Oriental',
	},
	{
		country_name: 'Morocco',
		province_name: 'Rabat-Salé-Kenitra',
	},
	{
		country_name: 'Morocco',
		province_name: 'Marrakech-Safi',
	},
	{
		country_name: 'Morocco',
		province_name: 'Fez-Meknes',
	},
	{
		country_name: 'Morocco',
		province_name: 'Casablanca-Settat',
	},
	{
		country_name: 'Mozambique',
		province_name: 'Sofala',
	},
	{
		country_name: 'Mozambique',
		province_name: 'Nampula',
	},
	{
		country_name: 'Mozambique',
		province_name: 'Cidade de Maputo',
	},
	{
		country_name: 'Mozambique',
		province_name: 'Inhambane',
	},
	{
		country_name: 'Mozambique',
		province_name: 'Manica',
	},
	{
		country_name: 'Mozambique',
		province_name: 'Matola',
	},
	{
		country_name: 'Mozambique',
		province_name: 'Zambézia',
	},
	{
		country_name: 'Mozambique',
		province_name: 'Niassa',
	},
	{
		country_name: 'Mozambique',
		province_name: 'Maputo',
	},
	{
		country_name: 'Mozambique',
		province_name: 'Gaza',
	},
	{
		country_name: 'Mozambique',
		province_name: 'Cabo Delgado',
	},
	{
		country_name: 'Mozambique',
		province_name: 'Tete',
	},
	{
		country_name: 'Myanmar',
		province_name: 'Ayeyarwady',
	},
	{
		country_name: 'Myanmar',
		province_name: 'Shan State',
	},
	{
		country_name: 'Myanmar',
		province_name: 'Chin',
	},
	{
		country_name: 'Myanmar',
		province_name: 'Kachin',
	},
	{
		country_name: 'Myanmar',
		province_name: 'Mon',
	},
	{
		country_name: 'Myanmar',
		province_name: 'Sagaing',
	},
	{
		country_name: 'Myanmar',
		province_name: 'Magway',
	},
	{
		country_name: 'Myanmar',
		province_name: 'Kayah',
	},
	{
		country_name: 'Myanmar',
		province_name: 'Yangon',
	},
	{
		country_name: 'Myanmar',
		province_name: 'Mandalay',
	},
	{
		country_name: 'Myanmar',
		province_name: 'Naypyitaw',
	},
	{
		country_name: 'Myanmar',
		province_name: 'Kayin',
	},
	{
		country_name: 'Myanmar',
		province_name: 'Bago Region',
	},
	{
		country_name: 'Myanmar',
		province_name: 'Tanintharyi Region',
	},
	{
		country_name: 'Myanmar',
		province_name: 'Rakhine',
	},
	{
		country_name: 'Namibia',
		province_name: 'Arandis',
	},
	{
		country_name: 'Namibia',
		province_name: 'Kavango East',
	},
	{
		country_name: 'Namibia',
		province_name: 'Erongo Region',
	},
	{
		country_name: 'Namibia',
		province_name: 'Kunene Region',
	},
	{
		country_name: 'Namibia',
		province_name: 'Omusati',
	},
	{
		country_name: 'Namibia',
		province_name: 'Otjozondjupa',
	},
	{
		country_name: 'Namibia',
		province_name: 'Kavango West',
	},
	{
		country_name: 'Namibia',
		province_name: 'Omaheke',
	},
	{
		country_name: 'Namibia',
		province_name: 'Oshikoto',
	},
	{
		country_name: 'Namibia',
		province_name: 'Aranos7',
	},
	{
		country_name: 'Namibia',
		province_name: 'Karas',
	},
	{
		country_name: 'Namibia',
		province_name: 'Ohangwena',
	},
	{
		country_name: 'Namibia',
		province_name: 'Zambezi',
	},
	{
		country_name: 'Namibia',
		province_name: 'Khomas',
	},
	{
		country_name: 'Namibia',
		province_name: 'Oshana',
	},
	{
		country_name: 'Namibia',
		province_name: 'Hardap',
	},
	{
		country_name: 'Nepal',
		province_name: 'Mid-Western Development Region',
	},
	{
		country_name: 'Nepal',
		province_name: 'Far-Western Development Region',
	},
	{
		country_name: 'Netherlands',
		province_name: 'South Holland',
	},
	{
		country_name: 'Netherlands',
		province_name: 'North Brabant',
	},
	{
		country_name: 'Netherlands',
		province_name: 'Gelderland',
	},
	{
		country_name: 'Netherlands',
		province_name: 'Flevoland',
	},
	{
		country_name: 'Netherlands',
		province_name: 'Groningen',
	},
	{
		country_name: 'Netherlands',
		province_name: 'North Holland',
	},
	{
		country_name: 'Netherlands',
		province_name: 'Drenthe',
	},
	{
		country_name: 'Netherlands',
		province_name: 'Zeeland',
	},
	{
		country_name: 'Netherlands',
		province_name: 'Friesland',
	},
	{
		country_name: 'Netherlands',
		province_name: 'Limburg',
	},
	{
		country_name: 'Netherlands',
		province_name: 'Utrecht',
	},
	{
		country_name: 'Netherlands',
		province_name: 'Overijssel',
	},
	{
		country_name: 'New Zealand',
		province_name: 'West Coast',
	},
	{
		country_name: 'New Zealand',
		province_name: 'Southland',
	},
	{
		country_name: 'New Zealand',
		province_name: 'Northland',
	},
	{
		country_name: 'New Zealand',
		province_name: 'Nelson',
	},
	{
		country_name: 'New Zealand',
		province_name: 'Marlborough',
	},
	{
		country_name: 'New Zealand',
		province_name: 'Waikato',
	},
	{
		country_name: 'New Zealand',
		province_name: 'Bay of Plenty',
	},
	{
		country_name: 'New Zealand',
		province_name: 'Wellington',
	},
	{
		country_name: 'New Zealand',
		province_name: "Hawke's Bay",
	},
	{
		country_name: 'New Zealand',
		province_name: 'Otago',
	},
	{
		country_name: 'New Zealand',
		province_name: 'Taranaki',
	},
	{
		country_name: 'New Zealand',
		province_name: 'Tasman',
	},
	{
		country_name: 'New Zealand',
		province_name: 'Auckland',
	},
	{
		country_name: 'New Zealand',
		province_name: 'Canterbury',
	},
	{
		country_name: 'New Zealand',
		province_name: 'Chatham Islands',
	},
	{
		country_name: 'New Zealand',
		province_name: 'Manawatu-Whanganui',
	},
	{
		country_name: 'New Zealand',
		province_name: 'Gisborne',
	},
	{
		country_name: 'Nicaragua',
		province_name: 'Masaya',
	},
	{
		country_name: 'Nicaragua',
		province_name: 'South Atlantic Autonomous Region',
	},
	{
		country_name: 'Nicaragua',
		province_name: 'Rivas',
	},
	{
		country_name: 'Nicaragua',
		province_name: 'Granada',
	},
	{
		country_name: 'Nicaragua',
		province_name: 'Jinotega',
	},
	{
		country_name: 'Nicaragua',
		province_name: 'Rio San Juan',
	},
	{
		country_name: 'Nicaragua',
		province_name: 'Chontales',
	},
	{
		country_name: 'Nicaragua',
		province_name: 'North Carribean Coast Autonomous Region',
	},
	{
		country_name: 'Nicaragua',
		province_name: 'Chinandega',
	},
	{
		country_name: 'Nicaragua',
		province_name: 'Departamento de Managua',
	},
	{
		country_name: 'Nicaragua',
		province_name: 'Carazo',
	},
	{
		country_name: 'Nicaragua',
		province_name: 'Estelí',
	},
	{
		country_name: 'Nicaragua',
		province_name: 'Madriz',
	},
	{
		country_name: 'Nicaragua',
		province_name: 'Nueva Segovia',
	},
	{
		country_name: 'Nicaragua',
		province_name: 'Leon',
	},
	{
		country_name: 'Nicaragua',
		province_name: 'Boaco',
	},
	{
		country_name: 'Nicaragua',
		province_name: 'Matagalpa',
	},
	{
		country_name: 'Niger',
		province_name: 'Tahoua',
	},
	{
		country_name: 'Niger',
		province_name: 'Maradi',
	},
	{
		country_name: 'Niger',
		province_name: 'Zinder',
	},
	{
		country_name: 'Niger',
		province_name: 'Tillabéri',
	},
	{
		country_name: 'Niger',
		province_name: 'Niamey',
	},
	{
		country_name: 'Niger',
		province_name: 'Dosso',
	},
	{
		country_name: 'Niger',
		province_name: 'Agadez',
	},
	{
		country_name: 'Niger',
		province_name: 'Diffa',
	},
	{
		country_name: 'Nigeria',
		province_name: 'Plateau',
	},
	{
		country_name: 'Nigeria',
		province_name: 'Kebbi',
	},
	{
		country_name: 'Nigeria',
		province_name: 'Ogun',
	},
	{
		country_name: 'Nigeria',
		province_name: 'Nasarawa',
	},
	{
		country_name: 'Nigeria',
		province_name: 'Bayelsa',
	},
	{
		country_name: 'Nigeria',
		province_name: 'Imo',
	},
	{
		country_name: 'Nigeria',
		province_name: 'Yobe',
	},
	{
		country_name: 'Nigeria',
		province_name: 'Bauchi',
	},
	{
		country_name: 'Nigeria',
		province_name: 'Sokoto',
	},
	{
		country_name: 'Nigeria',
		province_name: 'Kano',
	},
	{
		country_name: 'Nigeria',
		province_name: 'Delta',
	},
	{
		country_name: 'Nigeria',
		province_name: 'Oyo',
	},
	{
		country_name: 'Nigeria',
		province_name: 'Ondo',
	},
	{
		country_name: 'Nigeria',
		province_name: 'Anambra',
	},
	{
		country_name: 'Nigeria',
		province_name: 'Akwa Ibom',
	},
	{
		country_name: 'Nigeria',
		province_name: 'Cross River',
	},
	{
		country_name: 'Nigeria',
		province_name: 'Federal Capital Territory',
	},
	{
		country_name: 'Nigeria',
		province_name: 'Jigawa',
	},
	{
		country_name: 'Nigeria',
		province_name: 'Osun',
	},
	{
		country_name: 'Nigeria',
		province_name: 'Enugu',
	},
	{
		country_name: 'Nigeria',
		province_name: 'Abia',
	},
	{
		country_name: 'Nigeria',
		province_name: 'Ekiti',
	},
	{
		country_name: 'Nigeria',
		province_name: 'Kogi',
	},
	{
		country_name: 'Nigeria',
		province_name: 'Edo',
	},
	{
		country_name: 'Nigeria',
		province_name: 'Taraba',
	},
	{
		country_name: 'Nigeria',
		province_name: 'Borno',
	},
	{
		country_name: 'Nigeria',
		province_name: 'Katsina',
	},
	{
		country_name: 'Nigeria',
		province_name: 'Adamawa',
	},
	{
		country_name: 'Nigeria',
		province_name: 'Niger',
	},
	{
		country_name: 'Nigeria',
		province_name: 'Rivers',
	},
	{
		country_name: 'Nigeria',
		province_name: 'Kwara',
	},
	{
		country_name: 'Nigeria',
		province_name: 'Zamfara',
	},
	{
		country_name: 'Nigeria',
		province_name: 'Benue',
	},
	{
		country_name: 'Nigeria',
		province_name: 'Gombe',
	},
	{
		country_name: 'Nigeria',
		province_name: 'Ebonyi',
	},
	{
		country_name: 'Nigeria',
		province_name: 'Kaduna',
	},
	{
		country_name: 'North Korea',
		province_name: 'Pyongyang',
	},
	{
		country_name: 'North Korea',
		province_name: 'Hwanghaenam-do',
	},
	{
		country_name: 'North Korea',
		province_name: 'North Hamgyong',
	},
	{
		country_name: 'North Korea',
		province_name: '평양시',
	},
	{
		country_name: 'North Korea',
		province_name: 'Chagang',
	},
	{
		country_name: 'North Korea',
		province_name: 'North Pyongan',
	},
	{
		country_name: 'North Korea',
		province_name: 'Hamgyongnam-do',
	},
	{
		country_name: 'North Korea',
		province_name: 'North Hwanghae Province',
	},
	{
		country_name: 'North Korea',
		province_name: 'Pyongannam-do',
	},
	{
		country_name: 'North Korea',
		province_name: 'Nampo',
	},
	{
		country_name: 'North Korea',
		province_name: 'Ryanggang',
	},
	{
		country_name: 'North Korea',
		province_name: 'Kangwon-do',
	},
	{
		country_name: 'North Korea',
		province_name: 'Rason',
	},
	{
		country_name: 'North Macedonia',
		province_name: 'Northeastern Region',
	},
	{
		country_name: 'North Macedonia',
		province_name: 'Eastern Region',
	},
	{
		country_name: 'North Macedonia',
		province_name: 'Vardar Region',
	},
	{
		country_name: 'North Macedonia',
		province_name: 'Southeastern Region',
	},
	{
		country_name: 'North Macedonia',
		province_name: 'Southwestern Region',
	},
	{
		country_name: 'North Macedonia',
		province_name: 'Pelagonia Region',
	},
	{
		country_name: 'North Macedonia',
		province_name: 'Polog Region',
	},
	{
		country_name: 'North Macedonia',
		province_name: 'Skopje Region',
	},
	{
		country_name: 'Norway',
		province_name: 'Jan Mayen',
	},
	{
		country_name: 'Norway',
		province_name: 'Svalbard',
	},
	{
		country_name: 'Norway',
		province_name: 'Oslo',
	},
	{
		country_name: 'Norway',
		province_name: 'Vestland',
	},
	{
		country_name: 'Norway',
		province_name: 'Troms og Finnmark',
	},
	{
		country_name: 'Norway',
		province_name: 'Rogaland',
	},
	{
		country_name: 'Norway',
		province_name: 'Viken',
	},
	{
		country_name: 'Norway',
		province_name: 'Bouvet Island',
	},
	{
		country_name: 'Norway',
		province_name: 'Agder',
	},
	{
		country_name: 'Norway',
		province_name: 'Trøndelag',
	},
	{
		country_name: 'Norway',
		province_name: 'Nordland',
	},
	{
		country_name: 'Norway',
		province_name: 'Møre og Romsdal',
	},
	{
		country_name: 'Norway',
		province_name: 'Vestfold og Telemark',
	},
	{
		country_name: 'Norway',
		province_name: 'Innlandet',
	},
	{
		country_name: 'Oman',
		province_name: 'Al Wusta Governorate',
	},
	{
		country_name: 'Oman',
		province_name: 'Ad Dhahirah Governorate',
	},
	{
		country_name: 'Oman',
		province_name: 'Al Buraymi Governorate',
	},
	{
		country_name: 'Oman',
		province_name: 'Dhofar',
	},
	{
		country_name: 'Oman',
		province_name: 'Musandam Governorate',
	},
	{
		country_name: 'Oman',
		province_name: 'Muscat',
	},
	{
		country_name: 'Oman',
		province_name: 'Ash Sharqiyah North',
	},
	{
		country_name: 'Oman',
		province_name: 'Al Batinah North Governorate',
	},
	{
		country_name: 'Oman',
		province_name: 'Ad Dakhiliyah Governorate',
	},
	{
		country_name: 'Oman',
		province_name: 'Al Batinah South Governorate',
	},
	{
		country_name: 'Oman',
		province_name: 'Ash Sharqiyah South',
	},
	{
		country_name: 'Pakistan',
		province_name: 'Rawalpindi Cantt',
	},
	{
		country_name: 'Pakistan',
		province_name: 'Taxila Tehsil',
	},
	{
		country_name: 'Pakistan',
		province_name: 'Jhelum Valley District',
	},
	{
		country_name: 'Pakistan',
		province_name: 'Bagh District',
	},
	{
		country_name: 'Pakistan',
		province_name: 'Poonch District',
	},
	{
		country_name: 'Pakistan',
		province_name: 'Mirpur District',
	},
	{
		country_name: 'Pakistan',
		province_name: 'Kotli District',
	},
	{
		country_name: 'Pakistan',
		province_name: 'Sudhanoti District',
	},
	{
		country_name: 'Pakistan',
		province_name: 'Jhelum District',
	},
	{
		country_name: 'Pakistan',
		province_name: 'Chaklala Cantt',
	},
	{
		country_name: 'Pakistan',
		province_name: 'Rawalpindi District',
	},
	{
		country_name: 'Pakistan',
		province_name: 'Tehsil Sohawa',
	},
	{
		country_name: 'Pakistan',
		province_name: 'Muzaffarabad Districts',
	},
	{
		country_name: 'Pakistan',
		province_name: 'Haveli District',
	},
	{
		country_name: 'Pakistan',
		province_name: 'Bhimber District',
	},
	{
		country_name: 'Pakistan',
		province_name: 'District Attock',
	},
	{
		country_name: 'Palau',
		province_name: 'Aimeliik',
	},
	{
		country_name: 'Palau',
		province_name: 'Ngarchelong',
	},
	{
		country_name: 'Palau',
		province_name: 'Hatohobei',
	},
	{
		country_name: 'Palau',
		province_name: 'Ngatpang',
	},
	{
		country_name: 'Palau',
		province_name: 'Angaur',
	},
	{
		country_name: 'Palau',
		province_name: 'Ngchesar',
	},
	{
		country_name: 'Palau',
		province_name: 'Sonsorol',
	},
	{
		country_name: 'Palau',
		province_name: 'Peleliu',
	},
	{
		country_name: 'Palau',
		province_name: 'Ngeremlengui',
	},
	{
		country_name: 'Palau',
		province_name: 'Koror',
	},
	{
		country_name: 'Palau',
		province_name: 'Ngiwal',
	},
	{
		country_name: 'Palau',
		province_name: 'Airai',
	},
	{
		country_name: 'Palau',
		province_name: 'Kayangel',
	},
	{
		country_name: 'Palau',
		province_name: 'Ngardmau',
	},
	{
		country_name: 'Palau',
		province_name: 'Melekeok',
	},
	{
		country_name: 'Palau',
		province_name: 'Ngaraard',
	},
	{
		country_name: 'Panama',
		province_name: 'Panamá Oeste',
	},
	{
		country_name: 'Panama',
		province_name: 'Coclé',
	},
	{
		country_name: 'Panama',
		province_name: 'Panamá',
	},
	{
		country_name: 'Panama',
		province_name: 'Los Santos',
	},
	{
		country_name: 'Panama',
		province_name: 'Colón',
	},
	{
		country_name: 'Panama',
		province_name: 'Comarca Ngäbe Buglé',
	},
	{
		country_name: 'Panama',
		province_name: 'Veraguas',
	},
	{
		country_name: 'Panama',
		province_name: 'Comarca Guna Yala',
	},
	{
		country_name: 'Panama',
		province_name: 'Chiriquí',
	},
	{
		country_name: 'Panama',
		province_name: 'Darién',
	},
	{
		country_name: 'Panama',
		province_name: 'Herrera',
	},
	{
		country_name: 'Panama',
		province_name: 'Bocas del Toro',
	},
	{
		country_name: 'Panama',
		province_name: 'Comarca Emberá-Wounaan',
	},
	{
		country_name: 'Papua New Guinea',
		province_name: 'East Sepik',
	},
	{
		country_name: 'Papua New Guinea',
		province_name: 'Eastern Highlands',
	},
	{
		country_name: 'Papua New Guinea',
		province_name: 'Madang',
	},
	{
		country_name: 'Papua New Guinea',
		province_name: 'Sandaun',
	},
	{
		country_name: 'Papua New Guinea',
		province_name: 'Western Highlands',
	},
	{
		country_name: 'Papua New Guinea',
		province_name: 'West New Britain',
	},
	{
		country_name: 'Papua New Guinea',
		province_name: 'Southern Highlands',
	},
	{
		country_name: 'Papua New Guinea',
		province_name: 'Simbu',
	},
	{
		country_name: 'Papua New Guinea',
		province_name: 'Autonomous Region of Bougainville',
	},
	{
		country_name: 'Papua New Guinea',
		province_name: 'Morobe',
	},
	{
		country_name: 'Papua New Guinea',
		province_name: 'East New Britain',
	},
	{
		country_name: 'Papua New Guinea',
		province_name: 'Enga',
	},
	{
		country_name: 'Papua New Guinea',
		province_name: 'Hela',
	},
	{
		country_name: 'Papua New Guinea',
		province_name: 'Central',
	},
	{
		country_name: 'Papua New Guinea',
		province_name: 'Gulf',
	},
	{
		country_name: 'Papua New Guinea',
		province_name: 'Milne Bay',
	},
	{
		country_name: 'Papua New Guinea',
		province_name: 'Western',
	},
	{
		country_name: 'Papua New Guinea',
		province_name: 'Jiwaka',
	},
	{
		country_name: 'Papua New Guinea',
		province_name: 'Manus',
	},
	{
		country_name: 'Papua New Guinea',
		province_name: 'National Capital District',
	},
	{
		country_name: 'Papua New Guinea',
		province_name: 'Oro',
	},
	{
		country_name: 'Papua New Guinea',
		province_name: 'New Ireland',
	},
	{
		country_name: 'Paraguay',
		province_name: 'Cordillera',
	},
	{
		country_name: 'Paraguay',
		province_name: 'San Pedro',
	},
	{
		country_name: 'Paraguay',
		province_name: 'Amambay',
	},
	{
		country_name: 'Paraguay',
		province_name: 'Canindeyú',
	},
	{
		country_name: 'Paraguay',
		province_name: 'Alto Paraguay',
	},
	{
		country_name: 'Paraguay',
		province_name: 'Concepción',
	},
	{
		country_name: 'Paraguay',
		province_name: 'Caaguazú',
	},
	{
		country_name: 'Paraguay',
		province_name: 'Guairá',
	},
	{
		country_name: 'Paraguay',
		province_name: 'Central',
	},
	{
		country_name: 'Paraguay',
		province_name: 'Alto Paraná',
	},
	{
		country_name: 'Paraguay',
		province_name: 'Caazapá',
	},
	{
		country_name: 'Paraguay',
		province_name: 'Paraguarí',
	},
	{
		country_name: 'Paraguay',
		province_name: 'Presidente Hayes',
	},
	{
		country_name: 'Paraguay',
		province_name: 'Boquerón',
	},
	{
		country_name: 'Peru',
		province_name: 'Moquegua',
	},
	{
		country_name: 'Peru',
		province_name: 'Ica',
	},
	{
		country_name: 'Peru',
		province_name: 'Callao',
	},
	{
		country_name: 'Peru',
		province_name: 'Pasco',
	},
	{
		country_name: 'Peru',
		province_name: 'Amazonas',
	},
	{
		country_name: 'Peru',
		province_name: 'Cusco',
	},
	{
		country_name: 'Peru',
		province_name: 'Arequipa',
	},
	{
		country_name: 'Peru',
		province_name: 'San Martín',
	},
	{
		country_name: 'Peru',
		province_name: 'Huánuco',
	},
	{
		country_name: 'Peru',
		province_name: 'La Libertad',
	},
	{
		country_name: 'Peru',
		province_name: 'Tumbes',
	},
	{
		country_name: 'Peru',
		province_name: 'Cajamarca',
	},
	{
		country_name: 'Peru',
		province_name: 'Lima',
	},
	{
		country_name: 'Peru',
		province_name: 'Loreto',
	},
	{
		country_name: 'Peru',
		province_name: 'Piura',
	},
	{
		country_name: 'Peru',
		province_name: 'Huancavelica',
	},
	{
		country_name: 'Peru',
		province_name: 'Puno',
	},
	{
		country_name: 'Peru',
		province_name: 'Ucayali',
	},
	{
		country_name: 'Peru',
		province_name: 'Madre de Dios',
	},
	{
		country_name: 'Peru',
		province_name: 'Ancash',
	},
	{
		country_name: 'Peru',
		province_name: 'Apurímac',
	},
	{
		country_name: 'Peru',
		province_name: 'Ayacucho',
	},
	{
		country_name: 'Peru',
		province_name: 'Junín',
	},
	{
		country_name: 'Peru',
		province_name: 'Tacna',
	},
	{
		country_name: 'Peru',
		province_name: 'Lambayeque',
	},
	{
		country_name: 'Philippines',
		province_name: 'Zamboanga Sibugay',
	},
	{
		country_name: 'Philippines',
		province_name: 'Iloilo',
	},
	{
		country_name: 'Philippines',
		province_name: 'Oriental Mindoro',
	},
	{
		country_name: 'Philippines',
		province_name: 'Zambales',
	},
	{
		country_name: 'Philippines',
		province_name: 'Tarlac',
	},
	{
		country_name: 'Philippines',
		province_name: 'Sarangani',
	},
	{
		country_name: 'Philippines',
		province_name: 'Palawan',
	},
	{
		country_name: 'Philippines',
		province_name: 'Bulacan',
	},
	{
		country_name: 'Philippines',
		province_name: 'Surigao del Norte',
	},
	{
		country_name: 'Philippines',
		province_name: 'Eastern Samar',
	},
	{
		country_name: 'Philippines',
		province_name: 'Ilocos Norte',
	},
	{
		country_name: 'Philippines',
		province_name: 'Lanao del Sur',
	},
	{
		country_name: 'Philippines',
		province_name: 'Sorsogon',
	},
	{
		country_name: 'Philippines',
		province_name: 'Misamis Oriental',
	},
	{
		country_name: 'Philippines',
		province_name: 'Laguna',
	},
	{
		country_name: 'Philippines',
		province_name: 'Northern Samar',
	},
	{
		country_name: 'Philippines',
		province_name: 'Cagayan',
	},
	{
		country_name: 'Philippines',
		province_name: 'Leyte',
	},
	{
		country_name: 'Philippines',
		province_name: 'Masbate',
	},
	{
		country_name: 'Philippines',
		province_name: 'Davao del Norte',
	},
	{
		country_name: 'Philippines',
		province_name: 'Cotabato',
	},
	{
		country_name: 'Philippines',
		province_name: 'Camiguin',
	},
	{
		country_name: 'Philippines',
		province_name: 'Quirino',
	},
	{
		country_name: 'Philippines',
		province_name: 'Sulu',
	},
	{
		country_name: 'Philippines',
		province_name: 'Ilocos Sur',
	},
	{
		country_name: 'Philippines',
		province_name: 'Cebu',
	},
	{
		country_name: 'Philippines',
		province_name: 'Quezon',
	},
	{
		country_name: 'Philippines',
		province_name: 'Southern Leyte',
	},
	{
		country_name: 'Philippines',
		province_name: 'Occidental Mindoro',
	},
	{
		country_name: 'Philippines',
		province_name: 'Romblon',
	},
	{
		country_name: 'Philippines',
		province_name: 'Davao Occidental',
	},
	{
		country_name: 'Philippines',
		province_name: 'Zamboanga del Norte',
	},
	{
		country_name: 'Philippines',
		province_name: 'Samar',
	},
	{
		country_name: 'Philippines',
		province_name: 'Apayao',
	},
	{
		country_name: 'Philippines',
		province_name: 'Biliran',
	},
	{
		country_name: 'Philippines',
		province_name: 'Capiz',
	},
	{
		country_name: 'Philippines',
		province_name: 'Nueva Ecija',
	},
	{
		country_name: 'Philippines',
		province_name: 'Davao de Oro',
	},
	{
		country_name: 'Philippines',
		province_name: 'Marinduque',
	},
	{
		country_name: 'Philippines',
		province_name: 'Zamboanga del Sur',
	},
	{
		country_name: 'Philippines',
		province_name: 'Davao Oriental',
	},
	{
		country_name: 'Philippines',
		province_name: 'Mountain Province',
	},
	{
		country_name: 'Philippines',
		province_name: 'Siquijor',
	},
	{
		country_name: 'Philippines',
		province_name: 'La Union',
	},
	{
		country_name: 'Philippines',
		province_name: 'Guimaras',
	},
	{
		country_name: 'Philippines',
		province_name: 'Batanes',
	},
	{
		country_name: 'Philippines',
		province_name: 'Sultan Kudarat',
	},
	{
		country_name: 'Philippines',
		province_name: 'Agusan del Norte',
	},
	{
		country_name: 'Philippines',
		province_name: 'Ifugao',
	},
	{
		country_name: 'Philippines',
		province_name: 'Cavite',
	},
	{
		country_name: 'Philippines',
		province_name: 'Catanduanes',
	},
	{
		country_name: 'Philippines',
		province_name: 'Albay',
	},
	{
		country_name: 'Philippines',
		province_name: 'Antique',
	},
	{
		country_name: 'Philippines',
		province_name: 'Batangas',
	},
	{
		country_name: 'Philippines',
		province_name: 'Surigao del Sur',
	},
	{
		country_name: 'Philippines',
		province_name: 'Nueva Vizcaya',
	},
	{
		country_name: 'Philippines',
		province_name: 'Negros Oriental',
	},
	{
		country_name: 'Philippines',
		province_name: 'Misamis Occidental',
	},
	{
		country_name: 'Philippines',
		province_name: 'Camarines Norte',
	},
	{
		country_name: 'Philippines',
		province_name: 'Aklan',
	},
	{
		country_name: 'Philippines',
		province_name: 'Tawi-Tawi',
	},
	{
		country_name: 'Philippines',
		province_name: 'Agusan del Sur',
	},
	{
		country_name: 'Philippines',
		province_name: 'Negros Occidental',
	},
	{
		country_name: 'Philippines',
		province_name: 'Bukidnon',
	},
	{
		country_name: 'Philippines',
		province_name: 'Camarines Sur',
	},
	{
		country_name: 'Philippines',
		province_name: 'Maguindanao',
	},
	{
		country_name: 'Philippines',
		province_name: 'Bataan',
	},
	{
		country_name: 'Philippines',
		province_name: 'Benguet',
	},
	{
		country_name: 'Philippines',
		province_name: 'Basilan',
	},
	{
		country_name: 'Philippines',
		province_name: 'South Cotabato',
	},
	{
		country_name: 'Philippines',
		province_name: 'Pampanga',
	},
	{
		country_name: 'Philippines',
		province_name: 'Dinagat Islands',
	},
	{
		country_name: 'Philippines',
		province_name: 'Isabela',
	},
	{
		country_name: 'Philippines',
		province_name: 'Davao del Sur',
	},
	{
		country_name: 'Philippines',
		province_name: 'Rizal',
	},
	{
		country_name: 'Philippines',
		province_name: 'Aurora',
	},
	{
		country_name: 'Philippines',
		province_name: 'Pangasinan',
	},
	{
		country_name: 'Philippines',
		province_name: 'Abra',
	},
	{
		country_name: 'Philippines',
		province_name: 'Lanao del Norte',
	},
	{
		country_name: 'Poland',
		province_name: 'West Pomeranian Voivodeship',
	},
	{
		country_name: 'Poland',
		province_name: 'Łódź Voivodeship',
	},
	{
		country_name: 'Poland',
		province_name: 'Świętokrzyskie Voivodeship',
	},
	{
		country_name: 'Poland',
		province_name: 'Podlaskie Voivodeship',
	},
	{
		country_name: 'Poland',
		province_name: 'Greater Poland Voivodeship',
	},
	{
		country_name: 'Poland',
		province_name: 'Lesser Poland Voivodeship',
	},
	{
		country_name: 'Poland',
		province_name: 'Opole Voivodeship',
	},
	{
		country_name: 'Poland',
		province_name: 'Kuyavian-Pomeranian Voivodeship',
	},
	{
		country_name: 'Poland',
		province_name: 'Subcarpathian Voivodeship',
	},
	{
		country_name: 'Poland',
		province_name: 'Silesian Voivodeship',
	},
	{
		country_name: 'Poland',
		province_name: 'Lublin Voivodeship',
	},
	{
		country_name: 'Poland',
		province_name: 'Warmian-Masurian Voivodeship',
	},
	{
		country_name: 'Poland',
		province_name: 'Lubusz Voivodeship',
	},
	{
		country_name: 'Poland',
		province_name: 'Lower Silesian Voivodeship',
	},
	{
		country_name: 'Poland',
		province_name: 'Pomeranian Voivodeship',
	},
	{
		country_name: 'Poland',
		province_name: 'Masovian Voivodeship',
	},
	{
		country_name: 'Portugal',
		province_name: 'Madeira',
	},
	{
		country_name: 'Portugal',
		province_name: 'Alentejo',
	},
	{
		country_name: 'Portugal',
		province_name: 'Centro',
	},
	{
		country_name: 'Portugal',
		province_name: 'Área Metropolitana de Lisboa',
	},
	{
		country_name: 'Portugal',
		province_name: 'Algarve',
	},
	{
		country_name: 'Portugal',
		province_name: 'North',
	},
	{
		country_name: 'Portugal',
		province_name: 'Azores',
	},
	{
		country_name: 'Qatar',
		province_name: 'Ar Rayyan',
	},
	{
		country_name: 'Qatar',
		province_name: 'Doha',
	},
	{
		country_name: 'Qatar',
		province_name: 'Al Khor and Al Thakhira',
	},
	{
		country_name: 'Qatar',
		province_name: 'Al Daayen',
	},
	{
		country_name: 'Qatar',
		province_name: 'Ash Shamal',
	},
	{
		country_name: 'Qatar',
		province_name: 'Al Shahaniya',
	},
	{
		country_name: 'Qatar',
		province_name: 'Umm Salal',
	},
	{
		country_name: 'Qatar',
		province_name: 'Al Wakrah',
	},
	{
		country_name: 'Romania',
		province_name: 'Brașov',
	},
	{
		country_name: 'Romania',
		province_name: 'Teleorman',
	},
	{
		country_name: 'Romania',
		province_name: 'Mureș',
	},
	{
		country_name: 'Romania',
		province_name: 'Bucharest',
	},
	{
		country_name: 'Romania',
		province_name: 'Maramureș',
	},
	{
		country_name: 'Romania',
		province_name: 'Vaslui',
	},
	{
		country_name: 'Romania',
		province_name: 'Sălaj',
	},
	{
		country_name: 'Romania',
		province_name: 'Bistrița-Năsăud',
	},
	{
		country_name: 'Romania',
		province_name: 'Olt',
	},
	{
		country_name: 'Romania',
		province_name: 'Gorj',
	},
	{
		country_name: 'Romania',
		province_name: 'Buzău',
	},
	{
		country_name: 'Romania',
		province_name: 'Argeș',
	},
	{
		country_name: 'Romania',
		province_name: 'Caraș-Severin',
	},
	{
		country_name: 'Romania',
		province_name: 'Constanța',
	},
	{
		country_name: 'Romania',
		province_name: 'Suceava',
	},
	{
		country_name: 'Romania',
		province_name: 'Tulcea',
	},
	{
		country_name: 'Romania',
		province_name: 'Brăila',
	},
	{
		country_name: 'Romania',
		province_name: 'Iași',
	},
	{
		country_name: 'Romania',
		province_name: 'Dâmbovița',
	},
	{
		country_name: 'Romania',
		province_name: 'Hunedoara',
	},
	{
		country_name: 'Romania',
		province_name: 'Mehedinți',
	},
	{
		country_name: 'Romania',
		province_name: 'Ilfov',
	},
	{
		country_name: 'Romania',
		province_name: 'Cluj',
	},
	{
		country_name: 'Romania',
		province_name: 'Bacău',
	},
	{
		country_name: 'Romania',
		province_name: 'Vrancea',
	},
	{
		country_name: 'Romania',
		province_name: 'Sibiu',
	},
	{
		country_name: 'Romania',
		province_name: 'Covasna',
	},
	{
		country_name: 'Romania',
		province_name: 'Botoșani',
	},
	{
		country_name: 'Romania',
		province_name: 'Satu Mare',
	},
	{
		country_name: 'Romania',
		province_name: 'Bihor',
	},
	{
		country_name: 'Romania',
		province_name: 'Arad',
	},
	{
		country_name: 'Romania',
		province_name: 'Alba',
	},
	{
		country_name: 'Romania',
		province_name: 'Vâlcea',
	},
	{
		country_name: 'Romania',
		province_name: 'Giurgiu',
	},
	{
		country_name: 'Romania',
		province_name: 'Prahova',
	},
	{
		country_name: 'Romania',
		province_name: 'Dolj',
	},
	{
		country_name: 'Romania',
		province_name: 'Călărași',
	},
	{
		country_name: 'Romania',
		province_name: 'Timiș',
	},
	{
		country_name: 'Romania',
		province_name: 'Ialomița',
	},
	{
		country_name: 'Romania',
		province_name: 'Galați',
	},
	{
		country_name: 'Romania',
		province_name: 'Neamț',
	},
	{
		country_name: 'Romania',
		province_name: 'Harghita',
	},
	{
		country_name: 'Russia',
		province_name: 'Vladimir Oblast',
	},
	{
		country_name: 'Russia',
		province_name: 'Sakhalin Oblast',
	},
	{
		country_name: 'Russia',
		province_name: 'Moscow',
	},
	{
		country_name: 'Russia',
		province_name: 'Buryatia',
	},
	{
		country_name: 'Russia',
		province_name: 'Tula Oblast',
	},
	{
		country_name: 'Russia',
		province_name: 'Republic of Khakassia',
	},
	{
		country_name: 'Russia',
		province_name: 'Kursk Oblast',
	},
	{
		country_name: 'Russia',
		province_name: 'Mari El',
	},
	{
		country_name: 'Russia',
		province_name: 'Kabardino-Balkaria',
	},
	{
		country_name: 'Russia',
		province_name: 'Sevastopol',
	},
	{
		country_name: 'Russia',
		province_name: 'Kamchatka Krai',
	},
	{
		country_name: 'Russia',
		province_name: 'Lipetsk Oblast',
	},
	{
		country_name: 'Russia',
		province_name: 'Republic of Karelia',
	},
	{
		country_name: 'Russia',
		province_name: 'Kaliningrad',
	},
	{
		country_name: 'Russia',
		province_name: 'Ivanovo Oblast',
	},
	{
		country_name: 'Russia',
		province_name: 'Tver Oblast',
	},
	{
		country_name: 'Russia',
		province_name: 'Republic of Crimea',
	},
	{
		country_name: 'Russia',
		province_name: 'Moscow Oblast',
	},
	{
		country_name: 'Russia',
		province_name: 'Magadan Oblast',
	},
	{
		country_name: 'Russia',
		province_name: 'Yaroslavl Oblast',
	},
	{
		country_name: 'Russia',
		province_name: 'Republic of Adygea',
	},
	{
		country_name: 'Russia',
		province_name: 'Khabarovsk Krai',
	},
	{
		country_name: 'Russia',
		province_name: 'Belgorod Oblast',
	},
	{
		country_name: 'Russia',
		province_name: 'Tatarstan',
	},
	{
		country_name: 'Russia',
		province_name: 'Saint Petersburg',
	},
	{
		country_name: 'Russia',
		province_name: 'Republic of Kalmykia',
	},
	{
		country_name: 'Russia',
		province_name: 'Tomsk Oblast',
	},
	{
		country_name: 'Russia',
		province_name: 'Ulyanovsk Oblast',
	},
	{
		country_name: 'Russia',
		province_name: 'Republic of North Ossetia-Alania',
	},
	{
		country_name: 'Russia',
		province_name: 'Sevastopol',
	},
	{
		country_name: 'Russia',
		province_name: 'Sverdlovsk Oblast',
	},
	{
		country_name: 'Russia',
		province_name: 'Nenets Autonomous Okrug',
	},
	{
		country_name: 'Russia',
		province_name: 'Orenburg Oblast',
	},
	{
		country_name: 'Russia',
		province_name: 'Jewish Autonomous Oblast',
	},
	{
		country_name: 'Russia',
		province_name: 'Omsk Oblast',
	},
	{
		country_name: 'Russia',
		province_name: 'Pskov Oblast',
	},
	{
		country_name: 'Russia',
		province_name: 'Novgorod Oblast',
	},
	{
		country_name: 'Russia',
		province_name: 'Karachay-Cherkessia',
	},
	{
		country_name: 'Russia',
		province_name: 'Nizhny Novgorod Oblast',
	},
	{
		country_name: 'Russia',
		province_name: 'Sakha Republic',
	},
	{
		country_name: 'Russia',
		province_name: 'Tambov Oblast',
	},
	{
		country_name: 'Russia',
		province_name: 'Tyumen Oblast',
	},
	{
		country_name: 'Russia',
		province_name: 'Penza Oblast',
	},
	{
		country_name: 'Russia',
		province_name: 'Chuvashia',
	},
	{
		country_name: 'Russia',
		province_name: 'Voronezh Oblast',
	},
	{
		country_name: 'Russia',
		province_name: 'Kirov Oblast',
	},
	{
		country_name: 'Russia',
		province_name: 'Ryazan Oblast',
	},
	{
		country_name: 'Russia',
		province_name: 'Amur Oblast',
	},
	{
		country_name: 'Russia',
		province_name: 'Saratov Oblast',
	},
	{
		country_name: 'Russia',
		province_name: 'Republic of Mordovia',
	},
	{
		country_name: 'Russia',
		province_name: 'Yamalo-Nenets Autonomous Okrug',
	},
	{
		country_name: 'Russia',
		province_name: 'Zabaykalsky Krai',
	},
	{
		country_name: 'Russia',
		province_name: 'Stavropol Krai',
	},
	{
		country_name: 'Russia',
		province_name: 'Krasnoyarsk Krai',
	},
	{
		country_name: 'Russia',
		province_name: 'Kaluga Oblast',
	},
	{
		country_name: 'Russia',
		province_name: 'Bashkortostan',
	},
	{
		country_name: 'Russia',
		province_name: 'Samara Oblast',
	},
	{
		country_name: 'Russia',
		province_name: 'Vologda Oblast',
	},
	{
		country_name: 'Russia',
		province_name: 'Volgograd Oblast',
	},
	{
		country_name: 'Russia',
		province_name: 'Komi Republic',
	},
	{
		country_name: 'Russia',
		province_name: 'Primorsky Krai',
	},
	{
		country_name: 'Russia',
		province_name: 'Udmurtia',
	},
	{
		country_name: 'Russia',
		province_name: 'Smolensk Oblast',
	},
	{
		country_name: 'Russia',
		province_name: 'Perm Krai',
	},
	{
		country_name: 'Russia',
		province_name: 'Republic of Dagestan',
	},
	{
		country_name: 'Russia',
		province_name: 'Autonomous Republic of Crimea',
	},
	{
		country_name: 'Russia',
		province_name: 'Irkutsk Oblast',
	},
	{
		country_name: 'Russia',
		province_name: 'Rostov Oblast',
	},
	{
		country_name: 'Russia',
		province_name: 'Oryol Oblast',
	},
	{
		country_name: 'Russia',
		province_name: 'Astrakhan Oblast',
	},
	{
		country_name: 'Russia',
		province_name: 'Kostroma Oblast',
	},
	{
		country_name: 'Russia',
		province_name: 'Chukotka Autonomous Okrug',
	},
	{
		country_name: 'Russia',
		province_name: 'Bryansk Oblast',
	},
	{
		country_name: 'Russia',
		province_name: 'Arkhangelsk Oblast',
	},
	{
		country_name: 'Russia',
		province_name: 'Novosibirsk Oblast',
	},
	{
		country_name: 'Russia',
		province_name: 'Chelyabinsk Oblast',
	},
	{
		country_name: 'Russia',
		province_name: 'Krasnodar Krai',
	},
	{
		country_name: 'Russia',
		province_name: 'Leningrad oblast',
	},
	{
		country_name: 'Russia',
		province_name: 'Kemerovo Oblast',
	},
	{
		country_name: 'Russia',
		province_name: 'Altai Krai',
	},
	{
		country_name: 'Russia',
		province_name: 'Ingushetia',
	},
	{
		country_name: 'Russia',
		province_name: 'Murmansk Oblast',
	},
	{
		country_name: 'Russia',
		province_name: 'Chechen Republic',
	},
	{
		country_name: 'Russia',
		province_name: 'Tuva Republic',
	},
	{
		country_name: 'Russia',
		province_name: 'Khanty-Mansiysk Autonomous Okrug – Ugra',
	},
	{
		country_name: 'Rwanda',
		province_name: 'East Province',
	},
	{
		country_name: 'Rwanda',
		province_name: 'Northern Province',
	},
	{
		country_name: 'Rwanda',
		province_name: 'Western Province',
	},
	{
		country_name: 'Rwanda',
		province_name: 'Southern Province',
	},
	{
		country_name: 'Rwanda',
		province_name: 'Kigali City',
	},
	{
		country_name: 'Saint Helena, Ascension and Tristan da Cunha',
		province_name: 'Nightingale Island',
	},
	{
		country_name: 'Saint Helena, Ascension and Tristan da Cunha',
		province_name: 'Inaccessible Island',
	},
	{
		country_name: 'Saint Helena, Ascension and Tristan da Cunha',
		province_name: 'Tristan da Cunha',
	},
	{
		country_name: 'Saint Kitts and Nevis',
		province_name: 'Saint Kitts',
	},
	{
		country_name: 'Saint Kitts and Nevis',
		province_name: 'Nevis',
	},
	{
		country_name: 'Saint Lucia',
		province_name: 'Laborie',
	},
	{
		country_name: 'Saint Lucia',
		province_name: 'Canaries',
	},
	{
		country_name: 'Saint Lucia',
		province_name: 'Soufriere',
	},
	{
		country_name: 'Saint Lucia',
		province_name: 'Micoud',
	},
	{
		country_name: 'Saint Lucia',
		province_name: 'Dennery',
	},
	{
		country_name: 'Saint Lucia',
		province_name: 'Gros Islet',
	},
	{
		country_name: 'Saint Lucia',
		province_name: 'Anse la Raye',
	},
	{
		country_name: 'Saint Lucia',
		province_name: 'Choiseul',
	},
	{
		country_name: 'Saint Lucia',
		province_name: 'Castries',
	},
	{
		country_name: 'Saint Lucia',
		province_name: 'Vieux Fort',
	},
	{
		country_name: 'Saudi Arabia',
		province_name: 'Hayel Region',
	},
	{
		country_name: 'Saudi Arabia',
		province_name: 'Najran Region',
	},
	{
		country_name: 'Saudi Arabia',
		province_name: 'Al Madinah Region',
	},
	{
		country_name: 'Saudi Arabia',
		province_name: 'Northern Borders Region',
	},
	{
		country_name: 'Saudi Arabia',
		province_name: 'Riyadh Region',
	},
	{
		country_name: 'Saudi Arabia',
		province_name: 'Al-Qassim Region',
	},
	{
		country_name: 'Saudi Arabia',
		province_name: "'Asir Region",
	},
	{
		country_name: 'Saudi Arabia',
		province_name: 'Tabuk Region',
	},
	{
		country_name: 'Saudi Arabia',
		province_name: 'Al Jawf Region',
	},
	{
		country_name: 'Saudi Arabia',
		province_name: 'Jazan Region',
	},
	{
		country_name: 'Saudi Arabia',
		province_name: 'Makkah Region',
	},
	{
		country_name: 'Saudi Arabia',
		province_name: 'Al Bahah Region',
	},
	{
		country_name: 'Saudi Arabia',
		province_name: 'Eastern Region',
	},
	{
		country_name: 'Serbia',
		province_name: 'Vojvodina',
	},
	{
		country_name: 'Serbia',
		province_name: 'Central Serbia',
	},
	{
		country_name: 'Sierra Leone',
		province_name: 'Eastern Province',
	},
	{
		country_name: 'Sierra Leone',
		province_name: 'Northern Province',
	},
	{
		country_name: 'Sierra Leone',
		province_name: 'Southern Province',
	},
	{
		country_name: 'Sierra Leone',
		province_name: 'North Western Province',
	},
	{
		country_name: 'Sierra Leone',
		province_name: 'Western Area',
	},
	{
		country_name: 'Slovakia',
		province_name: 'Region of Nitra',
	},
	{
		country_name: 'Slovakia',
		province_name: 'Region of Bratislava',
	},
	{
		country_name: 'Slovakia',
		province_name: 'Region of Prešov',
	},
	{
		country_name: 'Slovakia',
		province_name: 'Region of Košice',
	},
	{
		country_name: 'Slovakia',
		province_name: 'Region of Žilina',
	},
	{
		country_name: 'Slovakia',
		province_name: 'Region of Banská Bystrica',
	},
	{
		country_name: 'Slovakia',
		province_name: 'Region of Trenčín',
	},
	{
		country_name: 'Slovakia',
		province_name: 'Region of Trnava',
	},
	{
		country_name: 'Solomon Islands',
		province_name: 'Honiara',
	},
	{
		country_name: 'Solomon Islands',
		province_name: 'Temotu',
	},
	{
		country_name: 'Solomon Islands',
		province_name: 'Choiseul',
	},
	{
		country_name: 'Solomon Islands',
		province_name: 'Malaita',
	},
	{
		country_name: 'Solomon Islands',
		province_name: 'Central Province',
	},
	{
		country_name: 'Solomon Islands',
		province_name: 'Rennell and Bellona',
	},
	{
		country_name: 'Solomon Islands',
		province_name: 'Isabel',
	},
	{
		country_name: 'Solomon Islands',
		province_name: 'Makira-Ulawa',
	},
	{
		country_name: 'Solomon Islands',
		province_name: 'Guadalcanal',
	},
	{
		country_name: 'Solomon Islands',
		province_name: 'Western',
	},
	{
		country_name: 'Somalia',
		province_name: 'Awdal',
	},
	{
		country_name: 'Somalia',
		province_name: 'Bakool',
	},
	{
		country_name: 'Somalia',
		province_name: 'Banaadir',
	},
	{
		country_name: 'Somalia',
		province_name: 'Mudug',
	},
	{
		country_name: 'Somalia',
		province_name: 'Middle Juba',
	},
	{
		country_name: 'Somalia',
		province_name: 'Galgaduud',
	},
	{
		country_name: 'Somalia',
		province_name: 'Hiiraan',
	},
	{
		country_name: 'Somalia',
		province_name: 'Bay',
	},
	{
		country_name: 'Somalia',
		province_name: 'Gedo',
	},
	{
		country_name: 'Somalia',
		province_name: 'Lower Juba',
	},
	{
		country_name: 'Somalia',
		province_name: 'Bari',
	},
	{
		country_name: 'Somalia',
		province_name: 'Sanaag',
	},
	{
		country_name: 'Somalia',
		province_name: 'Middle Shebelle',
	},
	{
		country_name: 'Somalia',
		province_name: 'Sool',
	},
	{
		country_name: 'Somalia',
		province_name: 'Nugaal',
	},
	{
		country_name: 'Somalia',
		province_name: 'Woqooyi Galbeed',
	},
	{
		country_name: 'Somalia',
		province_name: 'Togdheer',
	},
	{
		country_name: 'Somalia',
		province_name: 'Lower Shabelle',
	},
	{
		country_name: 'South Africa',
		province_name: 'Free State',
	},
	{
		country_name: 'South Africa',
		province_name: 'Eastern Cape',
	},
	{
		country_name: 'South Africa',
		province_name: 'Mpumalanga',
	},
	{
		country_name: 'South Africa',
		province_name: 'Gauteng',
	},
	{
		country_name: 'South Africa',
		province_name: 'North West',
	},
	{
		country_name: 'South Africa',
		province_name: 'Western Cape',
	},
	{
		country_name: 'South Africa',
		province_name: 'Limpopo',
	},
	{
		country_name: 'South Africa',
		province_name: 'Northern Cape',
	},
	{
		country_name: 'South Africa',
		province_name: 'KwaZulu-Natal',
	},
	{
		country_name: 'South Korea',
		province_name: 'Daejeon',
	},
	{
		country_name: 'South Korea',
		province_name: 'Incheon',
	},
	{
		country_name: 'South Korea',
		province_name: 'Busan',
	},
	{
		country_name: 'South Korea',
		province_name: 'Gyeongsangbuk-do',
	},
	{
		country_name: 'South Korea',
		province_name: 'Jeollanam-do',
	},
	{
		country_name: 'South Korea',
		province_name: 'Chungcheongbuk-do',
	},
	{
		country_name: 'South Korea',
		province_name: 'Gyeongsangnam-do',
	},
	{
		country_name: 'South Korea',
		province_name: 'Jeollabuk-do',
	},
	{
		country_name: 'South Korea',
		province_name: 'Seoul',
	},
	{
		country_name: 'South Korea',
		province_name: 'Ulsan',
	},
	{
		country_name: 'South Korea',
		province_name: 'Gyeonggi-do',
	},
	{
		country_name: 'South Korea',
		province_name: 'Gwangju',
	},
	{
		country_name: 'South Korea',
		province_name: 'Sejong',
	},
	{
		country_name: 'South Korea',
		province_name: 'Chungcheongnam-do',
	},
	{
		country_name: 'South Korea',
		province_name: 'Jeju-do',
	},
	{
		country_name: 'South Korea',
		province_name: 'Daegu',
	},
	{
		country_name: 'South Sudan',
		province_name: 'Central Equatoria',
	},
	{
		country_name: 'South Sudan',
		province_name: 'Upper Nile',
	},
	{
		country_name: 'South Sudan',
		province_name: 'Western Equatoria',
	},
	{
		country_name: 'South Sudan',
		province_name: 'Warrap',
	},
	{
		country_name: 'South Sudan',
		province_name: 'Jonglei',
	},
	{
		country_name: 'South Sudan',
		province_name: 'Unity',
	},
	{
		country_name: 'South Sudan',
		province_name: 'Lakes',
	},
	{
		country_name: 'South Sudan',
		province_name: 'Western Bahr el Ghazal',
	},
	{
		country_name: 'South Sudan',
		province_name: 'Eastern Equatoria',
	},
	{
		country_name: 'South Sudan',
		province_name: 'Northern Bahr el Ghazal',
	},
	{
		country_name: 'Spain',
		province_name: 'Balearic Islands',
	},
	{
		country_name: 'Spain',
		province_name: 'Asturias',
	},
	{
		country_name: 'Spain',
		province_name: 'Castile and León',
	},
	{
		country_name: 'Spain',
		province_name: 'Andalusia',
	},
	{
		country_name: 'Spain',
		province_name: 'Rioja',
	},
	{
		country_name: 'Spain',
		province_name: 'Plazas de Soberanía',
	},
	{
		country_name: 'Spain',
		province_name: 'Melilla',
	},
	{
		country_name: 'Spain',
		province_name: 'Galicia',
	},
	{
		country_name: 'Spain',
		province_name: 'Region of Murcia',
	},
	{
		country_name: 'Spain',
		province_name: 'Community of Madrid',
	},
	{
		country_name: 'Spain',
		province_name: 'Cantabria',
	},
	{
		country_name: 'Spain',
		province_name: 'Castile-La Mancha',
	},
	{
		country_name: 'Spain',
		province_name: 'Ceuta',
	},
	{
		country_name: 'Spain',
		province_name: 'Catalonia',
	},
	{
		country_name: 'Spain',
		province_name: 'Extremadura',
	},
	{
		country_name: 'Spain',
		province_name: 'Autonomous Community of the Basque Country',
	},
	{
		country_name: 'Spain',
		province_name: 'Valencian Community',
	},
	{
		country_name: 'Spain',
		province_name: 'Canary Islands',
	},
	{
		country_name: 'Spain',
		province_name: 'Navarre',
	},
	{
		country_name: 'Spain',
		province_name: 'Aragon',
	},
	{
		country_name: 'Sri Lanka',
		province_name: 'North Western Province',
	},
	{
		country_name: 'Sri Lanka',
		province_name: 'Western Province',
	},
	{
		country_name: 'Sri Lanka',
		province_name: 'North Central Province',
	},
	{
		country_name: 'Sri Lanka',
		province_name: 'Northern Province',
	},
	{
		country_name: 'Sri Lanka',
		province_name: 'Central Province',
	},
	{
		country_name: 'Sri Lanka',
		province_name: 'Southern Province',
	},
	{
		country_name: 'Sri Lanka',
		province_name: 'Eastern Province',
	},
	{
		country_name: 'Sri Lanka',
		province_name: 'Sabaragamuwa Province',
	},
	{
		country_name: 'Sri Lanka',
		province_name: 'Uva Province',
	},
	{
		country_name: 'Sudan',
		province_name: 'Gedarif State',
	},
	{
		country_name: 'Sudan',
		province_name: 'Gezira State',
	},
	{
		country_name: 'Sudan',
		province_name: 'River Nile',
	},
	{
		country_name: 'Sudan',
		province_name: 'Sennar State',
	},
	{
		country_name: 'Sudan',
		province_name: 'Central Darfur',
	},
	{
		country_name: 'Sudan',
		province_name: 'Northern State',
	},
	{
		country_name: 'Sudan',
		province_name: 'Blue Nile State',
	},
	{
		country_name: 'Sudan',
		province_name: 'Khartoum State',
	},
	{
		country_name: 'Sudan',
		province_name: 'West Darfur State',
	},
	{
		country_name: 'Sudan',
		province_name: 'East Darfur State',
	},
	{
		country_name: 'Sudan',
		province_name: 'White Nile State',
	},
	{
		country_name: 'Sudan',
		province_name: 'Red Sea State',
	},
	{
		country_name: 'Sudan',
		province_name: 'West Kurdufan',
	},
	{
		country_name: 'Sudan',
		province_name: 'Kassala',
	},
	{
		country_name: 'Sudan',
		province_name: 'South Kordofan State',
	},
	{
		country_name: 'Sudan',
		province_name: 'North Darfur State',
	},
	{
		country_name: 'Sudan',
		province_name: 'North Kordofan State',
	},
	{
		country_name: 'Sudan',
		province_name: 'South Darfur State',
	},
	{
		country_name: 'Suriname',
		province_name: 'Marowijne',
	},
	{
		country_name: 'Suriname',
		province_name: 'Para',
	},
	{
		country_name: 'Suriname',
		province_name: 'Commewijne',
	},
	{
		country_name: 'Suriname',
		province_name: 'Wanica',
	},
	{
		country_name: 'Suriname',
		province_name: 'Brokopondo',
	},
	{
		country_name: 'Suriname',
		province_name: 'Nickerie',
	},
	{
		country_name: 'Suriname',
		province_name: 'Coronie',
	},
	{
		country_name: 'Suriname',
		province_name: 'Paramaribo',
	},
	{
		country_name: 'Suriname',
		province_name: 'Saramacca',
	},
	{
		country_name: 'Suriname',
		province_name: 'Sipaliwini',
	},
	{
		country_name: 'Sweden',
		province_name: 'Gotland County',
	},
	{
		country_name: 'Sweden',
		province_name: 'Gävleborg County',
	},
	{
		country_name: 'Sweden',
		province_name: 'Jämtland County',
	},
	{
		country_name: 'Sweden',
		province_name: 'Jönköping County',
	},
	{
		country_name: 'Sweden',
		province_name: 'Västmanland County',
	},
	{
		country_name: 'Sweden',
		province_name: 'Örebro County',
	},
	{
		country_name: 'Sweden',
		province_name: 'Stockholm County',
	},
	{
		country_name: 'Sweden',
		province_name: 'Dalecarlia',
	},
	{
		country_name: 'Sweden',
		province_name: 'Västerbotten County',
	},
	{
		country_name: 'Sweden',
		province_name: 'Värmland County',
	},
	{
		country_name: 'Sweden',
		province_name: 'Blekinge County',
	},
	{
		country_name: 'Sweden',
		province_name: 'Halland County',
	},
	{
		country_name: 'Sweden',
		province_name: 'Södermanland County',
	},
	{
		country_name: 'Sweden',
		province_name: 'Uppsala County',
	},
	{
		country_name: 'Sweden',
		province_name: 'Kalmar County',
	},
	{
		country_name: 'Sweden',
		province_name: 'Västra Götaland County',
	},
	{
		country_name: 'Sweden',
		province_name: 'Östergötland County',
	},
	{
		country_name: 'Sweden',
		province_name: 'Kronoberg County',
	},
	{
		country_name: 'Sweden',
		province_name: 'Västernorrland County',
	},
	{
		country_name: 'Sweden',
		province_name: 'Skåne County',
	},
	{
		country_name: 'Sweden',
		province_name: 'Norrbotten County',
	},
	{
		country_name: 'Switzerland',
		province_name: 'Bern',
	},
	{
		country_name: 'Switzerland',
		province_name: 'Fribourg',
	},
	{
		country_name: 'Switzerland',
		province_name: 'Appenzell Innerrhoden',
	},
	{
		country_name: 'Switzerland',
		province_name: 'Glarus',
	},
	{
		country_name: 'Switzerland',
		province_name: 'Aargau',
	},
	{
		country_name: 'Switzerland',
		province_name: 'Neuchâtel',
	},
	{
		country_name: 'Switzerland',
		province_name: 'Uri',
	},
	{
		country_name: 'Switzerland',
		province_name: 'Appenzell Ausserrhoden',
	},
	{
		country_name: 'Switzerland',
		province_name: 'Solothurn',
	},
	{
		country_name: 'Switzerland',
		province_name: 'Zurich',
	},
	{
		country_name: 'Switzerland',
		province_name: 'Vaud',
	},
	{
		country_name: 'Switzerland',
		province_name: 'Basel-City',
	},
	{
		country_name: 'Switzerland',
		province_name: 'Jura',
	},
	{
		country_name: 'Switzerland',
		province_name: 'Valais/Wallis',
	},
	{
		country_name: 'Switzerland',
		province_name: 'Geneva',
	},
	{
		country_name: 'Switzerland',
		province_name: 'Nidwalden',
	},
	{
		country_name: 'Switzerland',
		province_name: 'Sankt Gallen',
	},
	{
		country_name: 'Switzerland',
		province_name: 'Grisons',
	},
	{
		country_name: 'Switzerland',
		province_name: 'Schwyz',
	},
	{
		country_name: 'Switzerland',
		province_name: 'Basel-Landschaft',
	},
	{
		country_name: 'Switzerland',
		province_name: 'Thurgau',
	},
	{
		country_name: 'Switzerland',
		province_name: 'Obwalden',
	},
	{
		country_name: 'Switzerland',
		province_name: 'Luzern',
	},
	{
		country_name: 'Switzerland',
		province_name: 'Schaffhausen',
	},
	{
		country_name: 'Switzerland',
		province_name: 'Zug',
	},
	{
		country_name: 'Switzerland',
		province_name: 'Ticino',
	},
	{
		country_name: 'Syria',
		province_name: 'Rif Dimashq Governorate',
	},
	{
		country_name: 'Syria',
		province_name: 'Hama Governorate',
	},
	{
		country_name: 'Syria',
		province_name: 'Idlib Governorate',
	},
	{
		country_name: 'Syria',
		province_name: 'Al-Hasaka Governorate',
	},
	{
		country_name: 'Syria',
		province_name: 'Homs Governorate',
	},
	{
		country_name: 'Syria',
		province_name: 'Deir Ezzor Governorate',
	},
	{
		country_name: 'Syria',
		province_name: 'Tartus Governorate',
	},
	{
		country_name: 'Syria',
		province_name: 'Latakia Governorate',
	},
	{
		country_name: 'Syria',
		province_name: 'Ar-Raqqah Governorate',
	},
	{
		country_name: 'Syria',
		province_name: 'As-Suwayda Governorate',
	},
	{
		country_name: 'Syria',
		province_name: 'Damascus Governorate',
	},
	{
		country_name: 'Syria',
		province_name: 'Al-Qunaitra Governorate',
	},
	{
		country_name: 'Syria',
		province_name: 'Daraa Governorate',
	},
	{
		country_name: 'Syria',
		province_name: 'Aleppo Governorate',
	},
	{
		country_name: 'São Tomé and Príncipe',
		province_name: 'Príncipe Province',
	},
	{
		country_name: 'São Tomé and Príncipe',
		province_name: 'São Tomé Province',
	},
	{
		country_name: 'Taiwan',
		province_name: 'Kaohsiung',
	},
	{
		country_name: 'Taiwan',
		province_name: 'New Taipei',
	},
	{
		country_name: 'Taiwan',
		province_name: 'Taipei',
	},
	{
		country_name: 'Taiwan',
		province_name: 'Tainan',
	},
	{
		country_name: 'Taiwan',
		province_name: 'Taiwan Province',
	},
	{
		country_name: 'Taiwan',
		province_name: 'Taoyuan City',
	},
	{
		country_name: 'Taiwan',
		province_name: 'Fujian Province',
	},
	{
		country_name: 'Taiwan',
		province_name: 'Taichung',
	},
	{
		country_name: 'Tajikistan',
		province_name: 'Khatlon Region',
	},
	{
		country_name: 'Tajikistan',
		province_name: 'Sughd Region',
	},
	{
		country_name: 'Tajikistan',
		province_name: 'Gorno-Badakhshan Autonomous Region',
	},
	{
		country_name: 'Tajikistan',
		province_name: 'Dushanbe',
	},
	{
		country_name: 'Tajikistan',
		province_name: 'Districts of Republican Subordination',
	},
	{
		country_name: 'Tanzania',
		province_name: 'Kigoma',
	},
	{
		country_name: 'Tanzania',
		province_name: 'Mtwara',
	},
	{
		country_name: 'Tanzania',
		province_name: 'Dar es Salaam',
	},
	{
		country_name: 'Tanzania',
		province_name: 'Katavi',
	},
	{
		country_name: 'Tanzania',
		province_name: 'Njombe',
	},
	{
		country_name: 'Tanzania',
		province_name: 'Manyara',
	},
	{
		country_name: 'Tanzania',
		province_name: 'Simiyu',
	},
	{
		country_name: 'Tanzania',
		province_name: 'Mbeya',
	},
	{
		country_name: 'Tanzania',
		province_name: 'Tanga',
	},
	{
		country_name: 'Tanzania',
		province_name: 'Rukwa',
	},
	{
		country_name: 'Tanzania',
		province_name: 'Pwani',
	},
	{
		country_name: 'Tanzania',
		province_name: 'North Pemba',
	},
	{
		country_name: 'Tanzania',
		province_name: 'Tabora',
	},
	{
		country_name: 'Tanzania',
		province_name: 'Morogoro',
	},
	{
		country_name: 'Tanzania',
		province_name: 'Iringa',
	},
	{
		country_name: 'Tanzania',
		province_name: 'Mwanza',
	},
	{
		country_name: 'Tanzania',
		province_name: 'Shinyanga',
	},
	{
		country_name: 'Tanzania',
		province_name: 'Lindi',
	},
	{
		country_name: 'Tanzania',
		province_name: 'Arusha',
	},
	{
		country_name: 'Tanzania',
		province_name: 'Ruvuma',
	},
	{
		country_name: 'Tanzania',
		province_name: 'Kilimanjaro',
	},
	{
		country_name: 'Tanzania',
		province_name: 'Zanzibar North',
	},
	{
		country_name: 'Tanzania',
		province_name: 'Geita',
	},
	{
		country_name: 'Tanzania',
		province_name: 'Zanzibar Urban/West',
	},
	{
		country_name: 'Tanzania',
		province_name: 'South Pemba',
	},
	{
		country_name: 'Tanzania',
		province_name: 'Kagera',
	},
	{
		country_name: 'Tanzania',
		province_name: 'Singida',
	},
	{
		country_name: 'Tanzania',
		province_name: 'Mara',
	},
	{
		country_name: 'Tanzania',
		province_name: 'Dodoma',
	},
	{
		country_name: 'Tanzania',
		province_name: 'Zanzibar South & Central',
	},
	{
		country_name: 'Thailand',
		province_name: 'Chiang Mai Province',
	},
	{
		country_name: 'Thailand',
		province_name: 'Amnat Charoen Province',
	},
	{
		country_name: 'Thailand',
		province_name: 'Samut Sakhon Province',
	},
	{
		country_name: 'Thailand',
		province_name: 'Sing Buri Province',
	},
	{
		country_name: 'Thailand',
		province_name: 'Udon Thani Province',
	},
	{
		country_name: 'Thailand',
		province_name: 'Tak Province',
	},
	{
		country_name: 'Thailand',
		province_name: 'Ranong Province',
	},
	{
		country_name: 'Thailand',
		province_name: 'Phatthalung Province',
	},
	{
		country_name: 'Thailand',
		province_name: 'Narathiwat Province',
	},
	{
		country_name: 'Thailand',
		province_name: 'Surin Province',
	},
	{
		country_name: 'Thailand',
		province_name: 'Phichit Province',
	},
	{
		country_name: 'Thailand',
		province_name: 'Prachuap Khiri Khan Province',
	},
	{
		country_name: 'Thailand',
		province_name: 'Pattani Province',
	},
	{
		country_name: 'Thailand',
		province_name: 'Nonthaburi Province',
	},
	{
		country_name: 'Thailand',
		province_name: 'Phang-nga Province',
	},
	{
		country_name: 'Thailand',
		province_name: 'Chaiyaphum Province',
	},
	{
		country_name: 'Thailand',
		province_name: 'Mukdahan Province',
	},
	{
		country_name: 'Thailand',
		province_name: 'Sukhothai Province',
	},
	{
		country_name: 'Thailand',
		province_name: 'Prachin Buri Province',
	},
	{
		country_name: 'Thailand',
		province_name: 'Phrae Province',
	},
	{
		country_name: 'Thailand',
		province_name: 'Bueng Kan Province',
	},
	{
		country_name: 'Thailand',
		province_name: 'Satun Province',
	},
	{
		country_name: 'Thailand',
		province_name: 'Kalasin',
	},
	{
		country_name: 'Thailand',
		province_name: 'Yasothon Province',
	},
	{
		country_name: 'Thailand',
		province_name: 'Sa Kaeo Province',
	},
	{
		country_name: 'Thailand',
		province_name: 'Ratchaburi Province',
	},
	{
		country_name: 'Thailand',
		province_name: 'Kanchanaburi Province',
	},
	{
		country_name: 'Thailand',
		province_name: 'Nan Province',
	},
	{
		country_name: 'Thailand',
		province_name: 'Phuket Province',
	},
	{
		country_name: 'Thailand',
		province_name: 'Phra Nakhon Si Ayutthaya Province',
	},
	{
		country_name: 'Thailand',
		province_name: 'Trat Province',
	},
	{
		country_name: 'Thailand',
		province_name: 'Phetchaburi Province',
	},
	{
		country_name: 'Thailand',
		province_name: 'Pathum Thani Province',
	},
	{
		country_name: 'Thailand',
		province_name: 'Nakhon Ratchasima Province',
	},
	{
		country_name: 'Thailand',
		province_name: 'Chachoengsao Province',
	},
	{
		country_name: 'Thailand',
		province_name: 'Nong Bua Lam Phu Province',
	},
	{
		country_name: 'Thailand',
		province_name: 'Loei Province',
	},
	{
		country_name: 'Thailand',
		province_name: 'Si Sa Ket Province',
	},
	{
		country_name: 'Thailand',
		province_name: 'Lop Buri Province',
	},
	{
		country_name: 'Thailand',
		province_name: 'Mae Hong Son Province',
	},
	{
		country_name: 'Thailand',
		province_name: 'Buri Ram Province',
	},
	{
		country_name: 'Thailand',
		province_name: 'Khon Kaen Province',
	},
	{
		country_name: 'Thailand',
		province_name: 'Rayong Province',
	},
	{
		country_name: 'Thailand',
		province_name: 'Saraburi Province',
	},
	{
		country_name: 'Thailand',
		province_name: 'Surat Thani Province',
	},
	{
		country_name: 'Thailand',
		province_name: 'Maha Sarakham Province',
	},
	{
		country_name: 'Thailand',
		province_name: 'Trang Province',
	},
	{
		country_name: 'Thailand',
		province_name: 'Chanthaburi Province',
	},
	{
		country_name: 'Thailand',
		province_name: 'Lamphun Province',
	},
	{
		country_name: 'Thailand',
		province_name: 'Chumphon Province',
	},
	{
		country_name: 'Thailand',
		province_name: 'Samut Songkhram Province',
	},
	{
		country_name: 'Thailand',
		province_name: 'Samut Prakan Province',
	},
	{
		country_name: 'Thailand',
		province_name: 'Uttaradit Province',
	},
	{
		country_name: 'Thailand',
		province_name: 'Phetchabun Province',
	},
	{
		country_name: 'Thailand',
		province_name: 'Sakon Nakhon Province',
	},
	{
		country_name: 'Thailand',
		province_name: 'Lampang Province',
	},
	{
		country_name: 'Thailand',
		province_name: 'Roi Et Province',
	},
	{
		country_name: 'Thailand',
		province_name: 'Ang Thong Province',
	},
	{
		country_name: 'Thailand',
		province_name: 'Uthai Thani Province',
	},
	{
		country_name: 'Thailand',
		province_name: 'Bangkok',
	},
	{
		country_name: 'Thailand',
		province_name: 'Krabi Province',
	},
	{
		country_name: 'Thailand',
		province_name: 'Yala Province',
	},
	{
		country_name: 'Thailand',
		province_name: 'Nakhon Sawan Province',
	},
	{
		country_name: 'Thailand',
		province_name: 'Nakhon Nayok Province',
	},
	{
		country_name: 'Thailand',
		province_name: 'Chai Nat Province',
	},
	{
		country_name: 'Thailand',
		province_name: 'Nakhon Pathom Province',
	},
	{
		country_name: 'Thailand',
		province_name: 'Phayao Province',
	},
	{
		country_name: 'Thailand',
		province_name: 'Nakhon Phanom Province',
	},
	{
		country_name: 'Thailand',
		province_name: 'Nakhon Si Thammarat Province',
	},
	{
		country_name: 'Thailand',
		province_name: 'Songkhla Province',
	},
	{
		country_name: 'Thailand',
		province_name: 'Suphan Buri Province',
	},
	{
		country_name: 'Thailand',
		province_name: 'Chon Buri Province',
	},
	{
		country_name: 'Thailand',
		province_name: 'Chiang Rai Province',
	},
	{
		country_name: 'Thailand',
		province_name: 'Kamphaeng Phet Province',
	},
	{
		country_name: 'Thailand',
		province_name: 'Ubon Ratchathani Province',
	},
	{
		country_name: 'Thailand',
		province_name: 'Nong Khai Province',
	},
	{
		country_name: 'Thailand',
		province_name: 'Phitsanulok Province',
	},
	{
		country_name: 'The Gambia',
		province_name: 'Upper River',
	},
	{
		country_name: 'The Gambia',
		province_name: 'Lower River',
	},
	{
		country_name: 'The Gambia',
		province_name: 'Banjul City Council',
	},
	{
		country_name: 'The Gambia',
		province_name: 'Kanifing Municipal Council',
	},
	{
		country_name: 'The Gambia',
		province_name: 'North Bank',
	},
	{
		country_name: 'The Gambia',
		province_name: 'West Coast',
	},
	{
		country_name: 'The Gambia',
		province_name: 'Central River',
	},
	{
		country_name: 'Togo',
		province_name: 'Lomé',
	},
	{
		country_name: 'Togo',
		province_name: 'Savanes Region',
	},
	{
		country_name: 'Togo',
		province_name: 'Maritime Region',
	},
	{
		country_name: 'Togo',
		province_name: 'Centrale Region',
	},
	{
		country_name: 'Togo',
		province_name: 'Plateaux Region',
	},
	{
		country_name: 'Togo',
		province_name: 'Kara Region',
	},
	{
		country_name: 'Tonga',
		province_name: 'Tongatapu',
	},
	{
		country_name: 'Tonga',
		province_name: 'Haʻapai',
	},
	{
		country_name: 'Tonga',
		province_name: 'Ongo Niua',
	},
	{
		country_name: 'Tonga',
		province_name: 'ʻEua',
	},
	{
		country_name: 'Tonga',
		province_name: 'Vavaʻu',
	},
	{
		country_name: 'Trinidad and Tobago',
		province_name: 'Diego Martin',
	},
	{
		country_name: 'Trinidad and Tobago',
		province_name: 'Siparia',
	},
	{
		country_name: 'Trinidad and Tobago',
		province_name: 'Chaguanas',
	},
	{
		country_name: 'Trinidad and Tobago',
		province_name: 'Tobago',
	},
	{
		country_name: 'Trinidad and Tobago',
		province_name: 'Point Fortin',
	},
	{
		country_name: 'Trinidad and Tobago',
		province_name: 'San Fernando',
	},
	{
		country_name: 'Trinidad and Tobago',
		province_name: 'Rio Claro-Mayaro',
	},
	{
		country_name: 'Trinidad and Tobago',
		province_name: 'Princes Town',
	},
	{
		country_name: 'Trinidad and Tobago',
		province_name: 'Penal-Debe',
	},
	{
		country_name: 'Trinidad and Tobago',
		province_name: 'Couva-Tabaquite-Talparo',
	},
	{
		country_name: 'Tunisia',
		province_name: 'Siliana',
	},
	{
		country_name: 'Tunisia',
		province_name: 'Zaghouan Governorate',
	},
	{
		country_name: 'Tunisia',
		province_name: 'Bizerte',
	},
	{
		country_name: 'Tunisia',
		province_name: 'Béja',
	},
	{
		country_name: 'Tunisia',
		province_name: 'Gafsa',
	},
	{
		country_name: 'Tunisia',
		province_name: 'Gabès',
	},
	{
		country_name: 'Tunisia',
		province_name: 'Al Kaf',
	},
	{
		country_name: 'Tunisia',
		province_name: 'Kairouan',
	},
	{
		country_name: 'Tunisia',
		province_name: 'Monastir',
	},
	{
		country_name: 'Tunisia',
		province_name: 'Manouba',
	},
	{
		country_name: 'Tunisia',
		province_name: 'Sidi Bouzid',
	},
	{
		country_name: 'Tunisia',
		province_name: 'Nabeul',
	},
	{
		country_name: 'Tunisia',
		province_name: 'Ben Arous',
	},
	{
		country_name: 'Tunisia',
		province_name: 'Tataouine',
	},
	{
		country_name: 'Tunisia',
		province_name: 'Tozeur',
	},
	{
		country_name: 'Tunisia',
		province_name: 'Médenine',
	},
	{
		country_name: 'Tunisia',
		province_name: 'Kébili',
	},
	{
		country_name: 'Tunisia',
		province_name: 'Sfax',
	},
	{
		country_name: 'Tunisia',
		province_name: 'Kasserine',
	},
	{
		country_name: 'Tunisia',
		province_name: 'Ariana',
	},
	{
		country_name: 'Tunisia',
		province_name: 'Mahdia',
	},
	{
		country_name: 'Tunisia',
		province_name: 'Jendouba',
	},
	{
		country_name: 'Tunisia',
		province_name: 'Sousse',
	},
	{
		country_name: 'Tunisia',
		province_name: 'Tunis',
	},
	{
		country_name: 'Turkey',
		province_name: 'Aksaray',
	},
	{
		country_name: 'Turkey',
		province_name: 'Kırklareli',
	},
	{
		country_name: 'Turkey',
		province_name: 'Sakarya',
	},
	{
		country_name: 'Turkey',
		province_name: 'Zonguldak',
	},
	{
		country_name: 'Turkey',
		province_name: 'Afyonkarahisar',
	},
	{
		country_name: 'Turkey',
		province_name: 'Denizli',
	},
	{
		country_name: 'Turkey',
		province_name: 'Hatay',
	},
	{
		country_name: 'Turkey',
		province_name: 'Niğde',
	},
	{
		country_name: 'Turkey',
		province_name: 'Antalya',
	},
	{
		country_name: 'Turkey',
		province_name: 'Adıyaman',
	},
	{
		country_name: 'Turkey',
		province_name: 'Ordu',
	},
	{
		country_name: 'Turkey',
		province_name: 'Bayburt',
	},
	{
		country_name: 'Turkey',
		province_name: 'Amasya',
	},
	{
		country_name: 'Turkey',
		province_name: 'Muğla',
	},
	{
		country_name: 'Turkey',
		province_name: 'Diyarbakır',
	},
	{
		country_name: 'Turkey',
		province_name: 'Mardin',
	},
	{
		country_name: 'Turkey',
		province_name: 'Çankırı',
	},
	{
		country_name: 'Turkey',
		province_name: 'Eskişehir',
	},
	{
		country_name: 'Turkey',
		province_name: 'Kastamonu',
	},
	{
		country_name: 'Turkey',
		province_name: 'Tokat',
	},
	{
		country_name: 'Turkey',
		province_name: 'Şanlıurfa',
	},
	{
		country_name: 'Turkey',
		province_name: 'Osmaniye',
	},
	{
		country_name: 'Turkey',
		province_name: 'Gaziantep',
	},
	{
		country_name: 'Turkey',
		province_name: 'Ankara',
	},
	{
		country_name: 'Turkey',
		province_name: 'Mersin',
	},
	{
		country_name: 'Turkey',
		province_name: 'Uşak',
	},
	{
		country_name: 'Turkey',
		province_name: 'Balıkesir',
	},
	{
		country_name: 'Turkey',
		province_name: 'Izmir',
	},
	{
		country_name: 'Turkey',
		province_name: 'Bingöl',
	},
	{
		country_name: 'Turkey',
		province_name: 'Malatya',
	},
	{
		country_name: 'Turkey',
		province_name: 'Burdur',
	},
	{
		country_name: 'Turkey',
		province_name: 'Kilis',
	},
	{
		country_name: 'Turkey',
		province_name: 'Kayseri',
	},
	{
		country_name: 'Turkey',
		province_name: 'Adana',
	},
	{
		country_name: 'Turkey',
		province_name: 'Manisa',
	},
	{
		country_name: 'Turkey',
		province_name: 'Bolu',
	},
	{
		country_name: 'Turkey',
		province_name: 'Muş',
	},
	{
		country_name: 'Turkey',
		province_name: 'Trabzon',
	},
	{
		country_name: 'Turkey',
		province_name: 'Artvin',
	},
	{
		country_name: 'Turkey',
		province_name: 'Kahramanmaraş',
	},
	{
		country_name: 'Turkey',
		province_name: 'Karaman',
	},
	{
		country_name: 'Turkey',
		province_name: 'Bartın',
	},
	{
		country_name: 'Turkey',
		province_name: 'Çorum',
	},
	{
		country_name: 'Turkey',
		province_name: 'Tekirdağ',
	},
	{
		country_name: 'Turkey',
		province_name: 'Aydın',
	},
	{
		country_name: 'Turkey',
		province_name: 'Gümüşhane',
	},
	{
		country_name: 'Turkey',
		province_name: 'Kocaeli',
	},
	{
		country_name: 'Turkey',
		province_name: 'Bilecik',
	},
	{
		country_name: 'Turkey',
		province_name: 'Istanbul',
	},
	{
		country_name: 'Turkey',
		province_name: 'Kars',
	},
	{
		country_name: 'Turkey',
		province_name: 'Edirne',
	},
	{
		country_name: 'Turkey',
		province_name: 'Kütahya',
	},
	{
		country_name: 'Turkey',
		province_name: 'Konya',
	},
	{
		country_name: 'Turkey',
		province_name: 'Erzincan',
	},
	{
		country_name: 'Turkey',
		province_name: 'Ardahan',
	},
	{
		country_name: 'Turkey',
		province_name: 'Van',
	},
	{
		country_name: 'Turkey',
		province_name: 'Canakkale',
	},
	{
		country_name: 'Turkey',
		province_name: 'Iğdır',
	},
	{
		country_name: 'Turkey',
		province_name: 'Kırşehir',
	},
	{
		country_name: 'Turkey',
		province_name: 'Rize',
	},
	{
		country_name: 'Turkey',
		province_name: 'Bitlis',
	},
	{
		country_name: 'Turkey',
		province_name: 'Bursa',
	},
	{
		country_name: 'Turkey',
		province_name: 'Ağrı',
	},
	{
		country_name: 'Turkey',
		province_name: 'Siirt',
	},
	{
		country_name: 'Turkey',
		province_name: 'Samsun',
	},
	{
		country_name: 'Turkey',
		province_name: 'Isparta',
	},
	{
		country_name: 'Turkey',
		province_name: 'Kırıkkale',
	},
	{
		country_name: 'Turkey',
		province_name: 'Yozgat',
	},
	{
		country_name: 'Turkey',
		province_name: 'Karabük',
	},
	{
		country_name: 'Turkey',
		province_name: 'Giresun',
	},
	{
		country_name: 'Turkey',
		province_name: 'Batman',
	},
	{
		country_name: 'Turkey',
		province_name: 'Sivas',
	},
	{
		country_name: 'Turkey',
		province_name: 'Yalova',
	},
	{
		country_name: 'Turkey',
		province_name: 'Nevşehir',
	},
	{
		country_name: 'Turkey',
		province_name: 'Sinop',
	},
	{
		country_name: 'Turkey',
		province_name: 'Düzce',
	},
	{
		country_name: 'Turkey',
		province_name: 'Erzurum',
	},
	{
		country_name: 'Turkey',
		province_name: 'Şırnak',
	},
	{
		country_name: 'Turkey',
		province_name: 'Elazığ',
	},
	{
		country_name: 'Turkey',
		province_name: 'Tunceli',
	},
	{
		country_name: 'Turkey',
		province_name: 'Hakkâri',
	},
	{
		country_name: 'Turkmenistan',
		province_name: 'Ashgabat',
	},
	{
		country_name: 'Turkmenistan',
		province_name: 'Mary Region',
	},
	{
		country_name: 'Turkmenistan',
		province_name: 'Daşoguz Region',
	},
	{
		country_name: 'Turkmenistan',
		province_name: 'Lebap Region',
	},
	{
		country_name: 'Turkmenistan',
		province_name: 'Ahal Region',
	},
	{
		country_name: 'Turkmenistan',
		province_name: 'Balkan Region',
	},
	{
		country_name: 'Uganda',
		province_name: 'Mpigi',
	},
	{
		country_name: 'Uganda',
		province_name: 'Napak',
	},
	{
		country_name: 'Uganda',
		province_name: 'Soroti',
	},
	{
		country_name: 'Uganda',
		province_name: 'Buhweju',
	},
	{
		country_name: 'Uganda',
		province_name: 'Nakasongola',
	},
	{
		country_name: 'Uganda',
		province_name: 'Wakiso',
	},
	{
		country_name: 'Uganda',
		province_name: 'Sembabule',
	},
	{
		country_name: 'Uganda',
		province_name: 'Namutumba',
	},
	{
		country_name: 'Uganda',
		province_name: 'Kisoro',
	},
	{
		country_name: 'Uganda',
		province_name: 'Lyantonde',
	},
	{
		country_name: 'Uganda',
		province_name: 'Zombo',
	},
	{
		country_name: 'Uganda',
		province_name: 'Kamuli',
	},
	{
		country_name: 'Uganda',
		province_name: 'Bududa',
	},
	{
		country_name: 'Uganda',
		province_name: 'Kasese',
	},
	{
		country_name: 'Uganda',
		province_name: 'Ibanda',
	},
	{
		country_name: 'Uganda',
		province_name: 'Kyankwanzi',
	},
	{
		country_name: 'Uganda',
		province_name: 'Masaka',
	},
	{
		country_name: 'Uganda',
		province_name: 'Gomba',
	},
	{
		country_name: 'Uganda',
		province_name: 'Mukono',
	},
	{
		country_name: 'Uganda',
		province_name: 'Amolatar',
	},
	{
		country_name: 'Uganda',
		province_name: 'Namayingo',
	},
	{
		country_name: 'Uganda',
		province_name: 'Bukwo',
	},
	{
		country_name: 'Uganda',
		province_name: 'Busia',
	},
	{
		country_name: 'Uganda',
		province_name: 'Lira District',
	},
	{
		country_name: 'Uganda',
		province_name: 'Ngora',
	},
	{
		country_name: 'Uganda',
		province_name: 'Mbale',
	},
	{
		country_name: 'Uganda',
		province_name: 'Mbarara',
	},
	{
		country_name: 'Uganda',
		province_name: 'Yumbe',
	},
	{
		country_name: 'Uganda',
		province_name: 'Kibaale',
	},
	{
		country_name: 'Uganda',
		province_name: 'Gulu',
	},
	{
		country_name: 'Uganda',
		province_name: 'Bundibugyo',
	},
	{
		country_name: 'Uganda',
		province_name: 'Moyo',
	},
	{
		country_name: 'Uganda',
		province_name: 'Iganga',
	},
	{
		country_name: 'Uganda',
		province_name: 'Kaberamaido',
	},
	{
		country_name: 'Uganda',
		province_name: 'Abim',
	},
	{
		country_name: 'Uganda',
		province_name: 'Agago',
	},
	{
		country_name: 'Uganda',
		province_name: 'Kotido',
	},
	{
		country_name: 'Uganda',
		province_name: 'Oyam',
	},
	{
		country_name: 'Uganda',
		province_name: 'Bukedea',
	},
	{
		country_name: 'Uganda',
		province_name: 'Sheema',
	},
	{
		country_name: 'Uganda',
		province_name: 'Pader',
	},
	{
		country_name: 'Uganda',
		province_name: 'Kalungu',
	},
	{
		country_name: 'Uganda',
		province_name: 'Kiboga',
	},
	{
		country_name: 'Uganda',
		province_name: 'Bulambuli',
	},
	{
		country_name: 'Uganda',
		province_name: 'Kalangala',
	},
	{
		country_name: 'Uganda',
		province_name: 'Bugiri',
	},
	{
		country_name: 'Uganda',
		province_name: 'Jinja',
	},
	{
		country_name: 'Uganda',
		province_name: 'Kapchorwa',
	},
	{
		country_name: 'Uganda',
		province_name: 'Rukungiri',
	},
	{
		country_name: 'Uganda',
		province_name: 'Koboko',
	},
	{
		country_name: 'Uganda',
		province_name: 'Kampala',
	},
	{
		country_name: 'Uganda',
		province_name: 'Kaliro',
	},
	{
		country_name: 'Uganda',
		province_name: 'Nakapiripirit',
	},
	{
		country_name: 'Uganda',
		province_name: 'Mityana',
	},
	{
		country_name: 'Uganda',
		province_name: 'Kumi',
	},
	{
		country_name: 'Uganda',
		province_name: 'Maracha',
	},
	{
		country_name: 'Uganda',
		province_name: 'Buvuma',
	},
	{
		country_name: 'Uganda',
		province_name: 'Kibuku',
	},
	{
		country_name: 'Uganda',
		province_name: 'Kaabong',
	},
	{
		country_name: 'Uganda',
		province_name: 'Kamwenge',
	},
	{
		country_name: 'Uganda',
		province_name: 'Amuria',
	},
	{
		country_name: 'Uganda',
		province_name: 'Amudat',
	},
	{
		country_name: 'Uganda',
		province_name: 'Buikwe',
	},
	{
		country_name: 'Uganda',
		province_name: 'Lamwo',
	},
	{
		country_name: 'Uganda',
		province_name: 'Nakaseke',
	},
	{
		country_name: 'Uganda',
		province_name: 'Mitooma',
	},
	{
		country_name: 'Uganda',
		province_name: 'Kween',
	},
	{
		country_name: 'Uganda',
		province_name: 'Kitgum',
	},
	{
		country_name: 'Uganda',
		province_name: 'Luweero',
	},
	{
		country_name: 'Uganda',
		province_name: 'Kole',
	},
	{
		country_name: 'Uganda',
		province_name: 'Butambala',
	},
	{
		country_name: 'Uganda',
		province_name: 'Kanungu',
	},
	{
		country_name: 'Uganda',
		province_name: 'Moroto',
	},
	{
		country_name: 'Uganda',
		province_name: 'Tororo',
	},
	{
		country_name: 'Uganda',
		province_name: 'Buyende',
	},
	{
		country_name: 'Uganda',
		province_name: 'Kayunga',
	},
	{
		country_name: 'Uganda',
		province_name: 'Masindi',
	},
	{
		country_name: 'Uganda',
		province_name: 'Alebtong',
	},
	{
		country_name: 'Uganda',
		province_name: 'Ntungamo',
	},
	{
		country_name: 'Uganda',
		province_name: 'Kabale',
	},
	{
		country_name: 'Uganda',
		province_name: 'Dokolo',
	},
	{
		country_name: 'Uganda',
		province_name: 'Bushenyi',
	},
	{
		country_name: 'Uganda',
		province_name: 'Serere',
	},
	{
		country_name: 'Uganda',
		province_name: 'Nwoya',
	},
	{
		country_name: 'Uganda',
		province_name: 'Isingiro',
	},
	{
		country_name: 'Uganda',
		province_name: 'Otuke',
	},
	{
		country_name: 'Uganda',
		province_name: 'Kabarole',
	},
	{
		country_name: 'Uganda',
		province_name: 'Nebbi',
	},
	{
		country_name: 'Uganda',
		province_name: 'Buliisa',
	},
	{
		country_name: 'Uganda',
		province_name: 'Bukomansimbi',
	},
	{
		country_name: 'Uganda',
		province_name: 'Arua',
	},
	{
		country_name: 'Uganda',
		province_name: 'Apac',
	},
	{
		country_name: 'Uganda',
		province_name: 'Budaka',
	},
	{
		country_name: 'Uganda',
		province_name: 'Amuru',
	},
	{
		country_name: 'Uganda',
		province_name: 'Adjumani',
	},
	{
		country_name: 'Uganda',
		province_name: 'Luuka',
	},
	{
		country_name: 'Uganda',
		province_name: 'Mayuge',
	},
	{
		country_name: 'Uganda',
		province_name: 'Rubirizi',
	},
	{
		country_name: 'Uganda',
		province_name: 'Manafwa',
	},
	{
		country_name: 'Uganda',
		province_name: 'Mubende',
	},
	{
		country_name: 'Uganda',
		province_name: 'Katakwi',
	},
	{
		country_name: 'Uganda',
		province_name: 'Hoima',
	},
	{
		country_name: 'Uganda',
		province_name: 'Butaleja',
	},
	{
		country_name: 'Uganda',
		province_name: 'Kiryandongo',
	},
	{
		country_name: 'Uganda',
		province_name: 'Ntoroko',
	},
	{
		country_name: 'Uganda',
		province_name: 'Pallisa',
	},
	{
		country_name: 'Uganda',
		province_name: 'Sironko',
	},
	{
		country_name: 'Ukraine',
		province_name: 'Zakarpattia Oblast',
	},
	{
		country_name: 'Ukraine',
		province_name: 'Київська міська громада',
	},
	{
		country_name: 'Ukraine',
		province_name: 'Luhansk Oblast',
	},
	{
		country_name: 'Ukraine',
		province_name: 'Rivne Oblast',
	},
	{
		country_name: 'Ukraine',
		province_name: 'Zaporizhia Oblast',
	},
	{
		country_name: 'Ukraine',
		province_name: 'Poltava Oblast',
	},
	{
		country_name: 'Ukraine',
		province_name: 'Mykolaiv Oblast',
	},
	{
		country_name: 'Ukraine',
		province_name: 'Chernihiv Oblast',
	},
	{
		country_name: 'Ukraine',
		province_name: 'Ivano-Frankivsk Oblast',
	},
	{
		country_name: 'Ukraine',
		province_name: 'Zhytomyr Oblast',
	},
	{
		country_name: 'Ukraine',
		province_name: 'Kyiv Oblast',
	},
	{
		country_name: 'Ukraine',
		province_name: 'Republic of Crimea',
	},
	{
		country_name: 'Ukraine',
		province_name: 'Kherson Oblast',
	},
	{
		country_name: 'Ukraine',
		province_name: 'Odesa Oblast',
	},
	{
		country_name: 'Ukraine',
		province_name: 'Chernivtsi Oblast',
	},
	{
		country_name: 'Ukraine',
		province_name: 'Autonomous Republic of Crimea',
	},
	{
		country_name: 'Ukraine',
		province_name: 'Cherkasy Oblast',
	},
	{
		country_name: 'Ukraine',
		province_name: 'Kyiv',
	},
	{
		country_name: 'Ukraine',
		province_name: 'Kirovohrad Oblast',
	},
	{
		country_name: 'Ukraine',
		province_name: 'Donetsk Oblast',
	},
	{
		country_name: 'Ukraine',
		province_name: 'Kharkiv Oblast',
	},
	{
		country_name: 'Ukraine',
		province_name: 'Lviv Oblast',
	},
	{
		country_name: 'Ukraine',
		province_name: 'Khmelnytskyi Oblast',
	},
	{
		country_name: 'Ukraine',
		province_name: 'Sevastopol',
	},
	{
		country_name: 'Ukraine',
		province_name: 'Ternopil Oblast',
	},
	{
		country_name: 'Ukraine',
		province_name: 'Volyn Oblast',
	},
	{
		country_name: 'Ukraine',
		province_name: 'Vinnytsia Oblast',
	},
	{
		country_name: 'Ukraine',
		province_name: 'Sevastopol',
	},
	{
		country_name: 'Ukraine',
		province_name: 'Dnipropetrovsk Oblast',
	},
	{
		country_name: 'Ukraine',
		province_name: 'Sumy Oblast',
	},
	{
		country_name: 'United Arab Emirates',
		province_name: 'Umm al-Quwain',
	},
	{
		country_name: 'United Arab Emirates',
		province_name: 'Sharjah Emirate',
	},
	{
		country_name: 'United Arab Emirates',
		province_name: 'Dubai',
	},
	{
		country_name: 'United Arab Emirates',
		province_name: 'Ras al-Khaimah',
	},
	{
		country_name: 'United Arab Emirates',
		province_name: 'Fujairah Emirate',
	},
	{
		country_name: 'United Arab Emirates',
		province_name: 'Ajman Emirate',
	},
	{
		country_name: 'United Arab Emirates',
		province_name: 'Abu Dhabi Emirate',
	},
	{
		country_name: 'United Kingdom',
		province_name: 'Wales',
	},
	{
		country_name: 'United Kingdom',
		province_name: 'Scotland',
	},
	{
		country_name: 'United Kingdom',
		province_name: 'England',
	},
	{
		country_name: 'United Kingdom',
		province_name: 'Northern Ireland',
	},
	{
		country_name: 'United States',
		province_name: 'Grand Traverse Reservation',
	},
	{
		country_name: 'United States',
		province_name: 'Nevada',
	},
	{
		country_name: 'United States',
		province_name: 'Mississippi',
	},
	{
		country_name: 'United States',
		province_name: 'Little Traverse Bay Bands of Odawas Reservation',
	},
	{
		country_name: 'United States',
		province_name: 'West Virginia',
	},
	{
		country_name: 'United States',
		province_name: 'Rhode Island',
	},
	{
		country_name: 'United States',
		province_name: 'Northern Mariana Islands',
	},
	{
		country_name: 'United States',
		province_name: 'Grand Traverse Reservation',
	},
	{
		country_name: 'United States',
		province_name: 'Puerto Rico',
	},
	{
		country_name: 'United States',
		province_name: 'Little Traverse Bay Band of Odawas Reservation',
	},
	{
		country_name: 'United States',
		province_name: 'Tennessee',
	},
	{
		country_name: 'United States',
		province_name: 'Puyallup Tribe Reservation',
	},
	{
		country_name: 'United States',
		province_name: 'Grand Traverse Reservation',
	},
	{
		country_name: 'United States',
		province_name: 'Oregon',
	},
	{
		country_name: 'United States',
		province_name: 'Utah',
	},
	{
		country_name: 'United States',
		province_name: 'Little Traverse Bay Bands of Odawas Reservation',
	},
	{
		country_name: 'United States',
		province_name: 'Ohio',
	},
	{
		country_name: 'United States',
		province_name: 'Little Traverse Bay Bands of Odawas Reservation',
	},
	{
		country_name: 'United States',
		province_name: 'Guam',
	},
	{
		country_name: 'United States',
		province_name: 'Illinois',
	},
	{
		country_name: 'United States',
		province_name: 'New Mexico',
	},
	{
		country_name: 'United States',
		province_name: 'Massachusetts',
	},
	{
		country_name: 'United States',
		province_name: 'Little Traverse Bay Bands of Odawas Reservation',
	},
	{
		country_name: 'United States',
		province_name: 'Puyallup Tribe',
	},
	{
		country_name: 'United States',
		province_name: 'California',
	},
	{
		country_name: 'United States',
		province_name: 'Virginia',
	},
	{
		country_name: 'United States',
		province_name: 'Little Traverse Bay Bands of Odawas Reservation',
	},
	{
		country_name: 'United States',
		province_name: 'Little Traverse Bay Bands of Odawas Reservation',
	},
	{
		country_name: 'United States',
		province_name: 'Kansas',
	},
	{
		country_name: 'United States',
		province_name: 'New York',
	},
	{
		country_name: 'United States',
		province_name: 'North Carolina',
	},
	{
		country_name: 'United States',
		province_name: 'Louisiana',
	},
	{
		country_name: 'United States',
		province_name: 'Little Traverse Bay Band of Odawas Reservation',
	},
	{
		country_name: 'United States',
		province_name: 'Michigan',
	},
	{
		country_name: 'United States',
		province_name: 'Grand Traverse Reservation',
	},
	{
		country_name: 'United States',
		province_name: 'South Carolina',
	},
	{
		country_name: 'United States',
		province_name: 'Little Traverse Bay Band of Odawa Reservation',
	},
	{
		country_name: 'United States',
		province_name: 'Maryland',
	},
	{
		country_name: 'United States',
		province_name: 'Alabama',
	},
	{
		country_name: 'United States',
		province_name: 'Puyallup Tribe',
	},
	{
		country_name: 'United States',
		province_name: 'Little Traverse Bay Band of Odawas Reservation',
	},
	{
		country_name: 'United States',
		province_name: 'Arkansas',
	},
	{
		country_name: 'United States',
		province_name: 'United States Virgin Islands',
	},
	{
		country_name: 'United States',
		province_name: 'Little Traverse Bay Bands Of Odawa Reservation',
	},
	{
		country_name: 'United States',
		province_name: 'Little Traverse Bay Bands Of Odawa Reservation',
	},
	{
		country_name: 'United States',
		province_name: 'New Hampshire',
	},
	{
		country_name: 'United States',
		province_name: 'Florida',
	},
	{
		country_name: 'United States',
		province_name: 'Hawaii',
	},
	{
		country_name: 'United States',
		province_name: 'Colorado',
	},
	{
		country_name: 'United States',
		province_name: 'Alaska',
	},
	{
		country_name: 'United States',
		province_name: 'Washington, D.C.',
	},
	{
		country_name: 'United States',
		province_name: 'Vermont',
	},
	{
		country_name: 'United States',
		province_name: 'Connecticut',
	},
	{
		country_name: 'United States',
		province_name: 'Nebraska',
	},
	{
		country_name: 'United States',
		province_name: 'New Jersey',
	},
	{
		country_name: 'United States',
		province_name: 'Indiana',
	},
	{
		country_name: 'United States',
		province_name: 'Missouri',
	},
	{
		country_name: 'United States',
		province_name: 'Little Traverse Bay Band of Odawas',
	},
	{
		country_name: 'United States',
		province_name: 'North Dakota',
	},
	{
		country_name: 'United States',
		province_name: 'Oklahoma',
	},
	{
		country_name: 'United States',
		province_name: 'Minnesota',
	},
	{
		country_name: 'United States',
		province_name: 'Delaware',
	},
	{
		country_name: 'United States',
		province_name: 'Arizona',
	},
	{
		country_name: 'United States',
		province_name: 'Kentucky',
	},
	{
		country_name: 'United States',
		province_name: 'Maine',
	},
	{
		country_name: 'United States',
		province_name: 'Wisconsin',
	},
	{
		country_name: 'United States',
		province_name: 'Wyoming',
	},
	{
		country_name: 'United States',
		province_name: 'Idaho',
	},
	{
		country_name: 'United States',
		province_name: 'American Samoa',
	},
	{
		country_name: 'United States',
		province_name: 'Montana',
	},
	{
		country_name: 'United States',
		province_name: 'Iowa',
	},
	{
		country_name: 'United States',
		province_name: 'Texas',
	},
	{
		country_name: 'United States',
		province_name: 'Georgia',
	},
	{
		country_name: 'United States',
		province_name: 'Grand Traverse Reservation',
	},
	{
		country_name: 'United States',
		province_name: 'Washington',
	},
	{
		country_name: 'United States',
		province_name: 'Île de la Navasse / Navassa Island',
	},
	{
		country_name: 'United States',
		province_name: 'Little Traverse Bay Bands of Odawas Reservation',
	},
	{
		country_name: 'United States',
		province_name: 'Grand Traverse Reservation',
	},
	{
		country_name: 'United States',
		province_name: 'Little Traverse Bay Bands Of Odawa Reservation',
	},
	{
		country_name: 'United States',
		province_name: 'Pennsylvania',
	},
	{
		country_name: 'United States',
		province_name: 'Grand Traverse Reservation',
	},
	{
		country_name: 'United States',
		province_name: 'South Dakota',
	},
	{
		country_name: 'Uruguay',
		province_name: 'Colonia',
	},
	{
		country_name: 'Uruguay',
		province_name: 'Salto',
	},
	{
		country_name: 'Uruguay',
		province_name: 'Lavalleja',
	},
	{
		country_name: 'Uruguay',
		province_name: 'Soriano',
	},
	{
		country_name: 'Uruguay',
		province_name: 'Río Negro',
	},
	{
		country_name: 'Uruguay',
		province_name: 'Rocha',
	},
	{
		country_name: 'Uruguay',
		province_name: 'Montevideo',
	},
	{
		country_name: 'Uruguay',
		province_name: 'Treinta y Tres',
	},
	{
		country_name: 'Uruguay',
		province_name: 'Florida',
	},
	{
		country_name: 'Uruguay',
		province_name: 'Flores',
	},
	{
		country_name: 'Uruguay',
		province_name: 'San José',
	},
	{
		country_name: 'Uruguay',
		province_name: 'Durazno',
	},
	{
		country_name: 'Uruguay',
		province_name: 'Cerro Largo',
	},
	{
		country_name: 'Uruguay',
		province_name: 'Tacuarembó',
	},
	{
		country_name: 'Uruguay',
		province_name: 'Rivera',
	},
	{
		country_name: 'Uruguay',
		province_name: 'Canelones',
	},
	{
		country_name: 'Uruguay',
		province_name: 'Maldonado',
	},
	{
		country_name: 'Uruguay',
		province_name: 'Paysandú',
	},
	{
		country_name: 'Uruguay',
		province_name: 'Artigas',
	},
	{
		country_name: 'Uzbekistan',
		province_name: 'Qashqadaryo Region',
	},
	{
		country_name: 'Uzbekistan',
		province_name: 'Tashkent',
	},
	{
		country_name: 'Uzbekistan',
		province_name: 'Sirdaryo Region',
	},
	{
		country_name: 'Uzbekistan',
		province_name: 'Samarqand Region',
	},
	{
		country_name: 'Uzbekistan',
		province_name: 'Fergana Region',
	},
	{
		country_name: 'Uzbekistan',
		province_name: 'Xorazm Region',
	},
	{
		country_name: 'Uzbekistan',
		province_name: 'Namangan Region',
	},
	{
		country_name: 'Uzbekistan',
		province_name: 'Andijan Region',
	},
	{
		country_name: 'Uzbekistan',
		province_name: 'Jizzakh Region',
	},
	{
		country_name: 'Uzbekistan',
		province_name: 'Republic of Karakalpakstan',
	},
	{
		country_name: 'Uzbekistan',
		province_name: 'Tashkent Region',
	},
	{
		country_name: 'Uzbekistan',
		province_name: 'Bukhara Region',
	},
	{
		country_name: 'Uzbekistan',
		province_name: 'Surxondaryo Region',
	},
	{
		country_name: 'Uzbekistan',
		province_name: 'Navoiy Region',
	},
	{
		country_name: 'Vanuatu',
		province_name: 'Malampa',
	},
	{
		country_name: 'Vanuatu',
		province_name: 'Torba',
	},
	{
		country_name: 'Vanuatu',
		province_name: 'Tafea',
	},
	{
		country_name: 'Vanuatu',
		province_name: 'Sanma',
	},
	{
		country_name: 'Vanuatu',
		province_name: 'Shefa Province',
	},
	{
		country_name: 'Vanuatu',
		province_name: 'Penama',
	},
	{
		country_name: 'Venezuela',
		province_name: 'Miranda',
	},
	{
		country_name: 'Venezuela',
		province_name: 'Monagas State',
	},
	{
		country_name: 'Venezuela',
		province_name: 'Aragua',
	},
	{
		country_name: 'Venezuela',
		province_name: 'Federal Dependencies',
	},
	{
		country_name: 'Venezuela',
		province_name: 'Bolivar State',
	},
	{
		country_name: 'Venezuela',
		province_name: 'Zulia',
	},
	{
		country_name: 'Venezuela',
		province_name: 'Falcón',
	},
	{
		country_name: 'Venezuela',
		province_name: 'Mérida',
	},
	{
		country_name: 'Venezuela',
		province_name: 'Amazonas State',
	},
	{
		country_name: 'Venezuela',
		province_name: 'Nueva Esparta',
	},
	{
		country_name: 'Venezuela',
		province_name: 'Lara',
	},
	{
		country_name: 'Venezuela',
		province_name: 'Cojedes',
	},
	{
		country_name: 'Venezuela',
		province_name: 'La Guaira',
	},
	{
		country_name: 'Venezuela',
		province_name: 'Delta Amacuro State',
	},
	{
		country_name: 'Venezuela',
		province_name: 'Distrito Capital',
	},
	{
		country_name: 'Venezuela',
		province_name: 'Táchira',
	},
	{
		country_name: 'Venezuela',
		province_name: 'Guarico State',
	},
	{
		country_name: 'Venezuela',
		province_name: 'Apure State',
	},
	{
		country_name: 'Venezuela',
		province_name: 'Barinas',
	},
	{
		country_name: 'Venezuela',
		province_name: 'Anzoategui State',
	},
	{
		country_name: 'Venezuela',
		province_name: 'Carabobo',
	},
	{
		country_name: 'Venezuela',
		province_name: 'Sucre',
	},
	{
		country_name: 'Venezuela',
		province_name: 'Portuguesa State',
	},
	{
		country_name: 'Venezuela',
		province_name: 'Trujillo',
	},
	{
		country_name: 'Venezuela',
		province_name: 'Yaracuy',
	},
	{
		country_name: 'Vietnam',
		province_name: 'Ho Chi Minh City',
	},
	{
		country_name: 'Vietnam',
		province_name: 'Tuyen Quang Province',
	},
	{
		country_name: 'Vietnam',
		province_name: 'Hoà Bình province',
	},
	{
		country_name: 'Vietnam',
		province_name: 'Ba Ria-Vung Tau Province',
	},
	{
		country_name: 'Vietnam',
		province_name: 'Hung Yen Province',
	},
	{
		country_name: 'Vietnam',
		province_name: 'Can Tho City',
	},
	{
		country_name: 'Vietnam',
		province_name: 'Lao Cai province',
	},
	{
		country_name: 'Vietnam',
		province_name: 'Thanh Hoa',
	},
	{
		country_name: 'Vietnam',
		province_name: 'Thừa Thiên Huế Province',
	},
	{
		country_name: 'Vietnam',
		province_name: 'Hanoi',
	},
	{
		country_name: 'Vietnam',
		province_name: 'Tay Ninh province',
	},
	{
		country_name: 'Vietnam',
		province_name: 'Hậu Giang Province',
	},
	{
		country_name: 'Vietnam',
		province_name: 'Soc Trang province',
	},
	{
		country_name: 'Vietnam',
		province_name: 'Ninh Binh province',
	},
	{
		country_name: 'Vietnam',
		province_name: 'Dong Thap Province',
	},
	{
		country_name: 'Vietnam',
		province_name: 'Kien Giang Province',
	},
	{
		country_name: 'Vietnam',
		province_name: 'Điện Biên Province',
	},
	{
		country_name: 'Vietnam',
		province_name: 'Lâm Đồng Province',
	},
	{
		country_name: 'Vietnam',
		province_name: 'Lạng Sơn Province',
	},
	{
		country_name: 'Vietnam',
		province_name: 'Lai Chau province',
	},
	{
		country_name: 'Vietnam',
		province_name: 'Nghe An province',
	},
	{
		country_name: 'Vietnam',
		province_name: 'Đắk Nông Province',
	},
	{
		country_name: 'Vietnam',
		province_name: 'Kon Tum province',
	},
	{
		country_name: 'Vietnam',
		province_name: 'Tra Vinh province',
	},
	{
		country_name: 'Vietnam',
		province_name: 'Binh Duong province',
	},
	{
		country_name: 'Vietnam',
		province_name: 'Ninh Thuan province',
	},
	{
		country_name: 'Vietnam',
		province_name: 'Hà Giang Province',
	},
	{
		country_name: 'Vietnam',
		province_name: 'Hải Dương Province',
	},
	{
		country_name: 'Vietnam',
		province_name: 'Thai Nguyen province',
	},
	{
		country_name: 'Vietnam',
		province_name: 'Ha Nam province',
	},
	{
		country_name: 'Vietnam',
		province_name: 'Haiphong',
	},
	{
		country_name: 'Vietnam',
		province_name: 'Quang Tri province',
	},
	{
		country_name: 'Vietnam',
		province_name: 'Binh Thuan province',
	},
	{
		country_name: 'Vietnam',
		province_name: 'Vinh Phuc Province',
	},
	{
		country_name: 'Vietnam',
		province_name: 'Cao Bang province',
	},
	{
		country_name: 'Vietnam',
		province_name: 'Vinh Long province',
	},
	{
		country_name: 'Vietnam',
		province_name: 'Yen Bai Province',
	},
	{
		country_name: 'Vietnam',
		province_name: 'Nam Dinh province',
	},
	{
		country_name: 'Vietnam',
		province_name: 'Thai Binh province',
	},
	{
		country_name: 'Vietnam',
		province_name: 'Quảng Ngãi',
	},
	{
		country_name: 'Vietnam',
		province_name: 'Bac Kan Province',
	},
	{
		country_name: 'Vietnam',
		province_name: 'Bến Tre Province',
	},
	{
		country_name: 'Vietnam',
		province_name: 'Bac Giang Province',
	},
	{
		country_name: 'Vietnam',
		province_name: 'Bac Lieu province',
	},
	{
		country_name: 'Vietnam',
		province_name: 'Tỉnh Quảng Nam',
	},
	{
		country_name: 'Vietnam',
		province_name: 'Bình Phước Province',
	},
	{
		country_name: 'Vietnam',
		province_name: 'Phu Tho Province',
	},
	{
		country_name: 'Vietnam',
		province_name: 'Quang Ninh Province',
	},
	{
		country_name: 'Vietnam',
		province_name: 'Dong Nai province',
	},
	{
		country_name: 'Vietnam',
		province_name: 'Quang Binh province',
	},
	{
		country_name: 'Vietnam',
		province_name: 'Ha Tinh Province',
	},
	{
		country_name: 'Vietnam',
		province_name: 'Phu Yen province',
	},
	{
		country_name: 'Vietnam',
		province_name: 'Gia Lai Province',
	},
	{
		country_name: 'Vietnam',
		province_name: 'Tien Giang province',
	},
	{
		country_name: 'Vietnam',
		province_name: 'Đắk Lắk province',
	},
	{
		country_name: 'Vietnam',
		province_name: 'Bình Định Province',
	},
	{
		country_name: 'Vietnam',
		province_name: 'Son La province',
	},
	{
		country_name: 'Vietnam',
		province_name: 'Bac Ninh province',
	},
	{
		country_name: 'Vietnam',
		province_name: 'Long An province',
	},
	{
		country_name: 'Vietnam',
		province_name: 'Da Nang',
	},
	{
		country_name: 'Vietnam',
		province_name: 'Ca Mau province',
	},
	{
		country_name: 'Yemen',
		province_name: 'Al Mahrah Governorate',
	},
	{
		country_name: 'Yemen',
		province_name: "Sana'a Governorate",
	},
	{
		country_name: 'Yemen',
		province_name: 'Amran Governorate',
	},
	{
		country_name: 'Yemen',
		province_name: 'Socotra Governorate',
	},
	{
		country_name: 'Yemen',
		province_name: 'Hadramaut Governorate',
	},
	{
		country_name: 'Yemen',
		province_name: 'Lahij Governorate',
	},
	{
		country_name: 'Yemen',
		province_name: "Al Bayda' Governorate",
	},
	{
		country_name: 'Yemen',
		province_name: 'Dhamar Governorate',
	},
	{
		country_name: 'Yemen',
		province_name: 'Shabwah Governorate',
	},
	{
		country_name: 'Yemen',
		province_name: 'Al Hudaydah Governorate',
	},
	{
		country_name: 'Yemen',
		province_name: 'Hajjah Governorate',
	},
	{
		country_name: 'Yemen',
		province_name: 'Ibb Governorate',
	},
	{
		country_name: 'Yemen',
		province_name: "Ta'izz Governorate",
	},
	{
		country_name: 'Yemen',
		province_name: 'Amanat Al Asimah',
	},
	{
		country_name: 'Yemen',
		province_name: 'Al Jawf Governorate',
	},
	{
		country_name: 'Yemen',
		province_name: "Ad Dali' Governorate",
	},
	{
		country_name: 'Yemen',
		province_name: 'Raymah Governorate',
	},
	{
		country_name: 'Yemen',
		province_name: 'Abyan Governorate',
	},
	{
		country_name: 'Yemen',
		province_name: 'Al Mahwit Governorate',
	},
	{
		country_name: 'Yemen',
		province_name: "Sa'dah Governorate",
	},
	{
		country_name: 'Yemen',
		province_name: 'Marib Governorate',
	},
	{
		country_name: 'Yemen',
		province_name: 'Aden Governorate',
	},
	{
		country_name: 'Zambia',
		province_name: 'Western Province',
	},
	{
		country_name: 'Zambia',
		province_name: 'Luapula Province',
	},
	{
		country_name: 'Zambia',
		province_name: 'North-Western Province',
	},
	{
		country_name: 'Zambia',
		province_name: 'Eastern Province',
	},
	{
		country_name: 'Zambia',
		province_name: 'Northern Province',
	},
	{
		country_name: 'Zambia',
		province_name: 'Lusaka Province',
	},
	{
		country_name: 'Zambia',
		province_name: 'Southern Province',
	},
	{
		country_name: 'Zambia',
		province_name: 'Central Province',
	},
	{
		country_name: 'Zambia',
		province_name: 'Copperbelt Province',
	},
	{
		country_name: 'Zambia',
		province_name: 'Muchinga Province',
	},
	{
		country_name: 'Zimbabwe',
		province_name: 'Harare Province',
	},
	{
		country_name: 'Zimbabwe',
		province_name: 'Bulawayo Province',
	},
	{
		country_name: 'Zimbabwe',
		province_name: 'Mashonaland East',
	},
	{
		country_name: 'Zimbabwe',
		province_name: 'Midlands',
	},
	{
		country_name: 'Zimbabwe',
		province_name: 'Matabeleland North',
	},
	{
		country_name: 'Zimbabwe',
		province_name: 'Manicaland',
	},
	{
		country_name: 'Zimbabwe',
		province_name: 'Mashonaland Central',
	},
	{
		country_name: 'Zimbabwe',
		province_name: 'Masvingo',
	},
	{
		country_name: 'Zimbabwe',
		province_name: 'Mashonaland West',
	},
	{
		country_name: 'Zimbabwe',
		province_name: 'Matabeleland South',
	},
];

const countryMap = new Map();

for (const region of regions) {
	if (countryMap.get(region.country_name)) {
		countryMap.get(region.country_name).subregions.push({ name: region.province_name });
	} else {
		countryMap.set(region.country_name, {
			name: region.country_name,
			subregions: [{ name: region.province_name }],
		});
	}
}
const countries = [];

for (const [name, object] of countryMap) {
	const subregionSet = new Set();
	object.subregions = object.subregions
		.filter(({ name }) => {
			if (subregionSet.has(name)) {
				return false;
			}
			subregionSet.add(name);
			return true;
		})
		.sort((a, b) => a.name.localeCompare(b.name));
	countries.push(object);
}

console.log(JSON.stringify(countries));
