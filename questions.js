const questions = [
    {
q: "Which material is commonly used as the anode in lithium-ion batteries?",
options: ["Nickel oxide","Graphite","Manganese oxide","Lithium cobalt oxide"],
answer: 1,
},

{
q: "The main purpose of a Battery Management System is to:",
options: ["Replace battery cells","Generate electricity","Monitor and control battery operation","Increase battery weight"],
answer: 2,
},

{
q: "Which component prevents internal short circuits between battery electrodes?",
options: ["Separator","Electrolyte","Cathode","Terminal connector"],
answer: 0,
},

{
q: "Which battery chemistry is widely used in electric vehicles?",
options: ["Lithium-ion","Zinc carbon","Lead acid","Nickel iron"],
answer: 0,
},

{
q: "The electrolyte in a lithium-ion battery primarily enables:",
options: ["Structural rigidity","Mechanical support","Heat insulation","Ion movement between electrodes"],
answer: 3,
},

{
q: "Overcharging a lithium-ion battery may cause:",
options: ["Improved efficiency","Reduced conductivity","Increased stability","Thermal runaway"],
answer: 3,
},

{
q: "Which parameter is continuously monitored by a BMS?",
options: ["Voltage","Paint thickness","Screen brightness","Wheel alignment"],
answer: 0,
},

{
q: "Cell balancing in BMS is mainly used to:",
options: ["Increase battery size","Equalize cell voltages","Replace damaged cells","Increase charging speed"],
answer: 1,
},

{
q: "Which component in BMS measures battery temperature?",
options: ["Fuse","Thermistor","Capacitor","Relay"],
answer: 1,
},

{
q: "The cathode in a lithium-ion battery typically stores:",
options: ["Hydrogen ions","Electrons","Lithium ions","Oxygen gas"],
answer: 2,
},

{
q: "Which process occurs during battery discharge?",
options: ["Electrolyte evaporates","Lithium ions move from anode to cathode","Electrons remain stationary","Lithium ions move from cathode to anode"],
answer: 1,
},

{
q: "The main safety role of BMS includes:",
options: ["Increasing battery packaging","Reducing mechanical strength","Preventing overcharge and over-discharge","Increasing battery color options"],
answer: 2,
},

{
q: "A battery pack usually consists of:",
options: ["A single electrode","One separator","Only one large cell","Multiple cells connected together"],
answer: 3,
},

{
q: "Which BMS topology monitors each cell individually?",
options: ["Centralized BMS","Modular BMS","Distributed BMS","Passive BMS"],
answer: 2,
},

{
q: "Which parameter indicates remaining battery capacity?",
options: ["Voltage ripple","Internal resistance","State of Charge","Cell impedance"],
answer: 2,
},

{
q: "Which failure can occur due to excessive temperature?",
options: ["Thermal runaway","Improved performance","Higher capacity","Reduced voltage drop"],
answer: 0,
},

{
q: "Which BMS function estimates battery health?",
options: ["Structural analysis","Cell manufacturing","State of Health estimation","State of power generation"],
answer: 2,
},

{
q: "Which material is often used in cathodes?",
options: ["Silicon carbide","Graphite","Lithium cobalt oxide","Aluminum oxide"],
answer: 2,
},

{
q: "Passive cell balancing mainly dissipates energy as:",
options: ["Mechanical energy","Heat","Magnetic energy","Light"],
answer: 1,
},

{
q: "Active balancing transfers energy between:",
options: ["Sensors","Cells","Terminals","Connectors"],
answer: 1,
},

{
q: "Which sensor measures battery current?",
options: ["Gyroscope","Hall effect sensor","Accelerometer","Microphone"],
answer: 1,
},

{
q: "Which condition can degrade lithium-ion batteries?",
options: ["Balanced voltage","Deep discharge","Proper temperature","Controlled charging"],
answer: 1,
},

{
q: "The main role of the separator is:",
options: ["Prevent short circuit","Store electrons","Increase battery voltage","Increase mass"],
answer: 0,
},

{
q: "Lithium-ion batteries are preferred because of:",
options: ["Low voltage","High energy density","Low efficiency","High leakage"],
answer: 1,
},

{
q: "Which component provides electrical connection between cells?",
options: ["Electrolyte","Separator","Busbar","Cathode coating"],
answer: 2,
},

{
q: "Which method protects battery from short circuit?",
options: ["Sensor","Fuse","Capacitor","Inductor"],
answer: 1,
},

{
q: "BMS communication in vehicles commonly uses:",
options: ["Ethernet fiber","HDMI port","CAN bus","VGA cable"],
answer: 2,
},

{
q: "Which parameter indicates battery aging?",
options: ["State of Health","Voltage ripple","State of Charge","Frequency response"],
answer: 0,
},

{
q: "Lithium plating may occur during:",
options: ["Balanced charging","Overcharging","Idle state","Slow discharge"],
answer: 1,
},

{
q: "Which type of BMS architecture is easiest to implement?",
options: ["Centralized","Distributed","Modular","Networked"],
answer: 0,
},

{
q: "Which device disconnects battery during fault?",
options: ["Inductor","Contactor","Transformer","Capacitor"],
answer: 1,
},

{
q: "The BMS calculates State of Charge using:",
options: ["Optical sensing","Mechanical sensing","Voltage filtering","Coulomb counting"],
answer: 3,
},

{
q: "Lithium-ion batteries should avoid:",
options: ["Balanced charge","Extreme temperatures","Moderate temperatures","Proper storage"],
answer: 1,
},

{
q: "Which layer stores lithium during charging?",
options: ["Cathode","Electrolyte","Separator","Anode"],
answer: 3,
},

{
q: "Which factor affects battery lifespan?",
options: ["External shape","Battery color","Charge cycles","Connector type"],
answer: 2,
},

{
q: "Which component controls charging process?",
options: ["Alternator","Motor controller","BMS","Display unit"],
answer: 2,
},

{
q: "The main advantage of lithium-ion batteries is:",
options: ["Large weight","High energy density","Low cycle life","Low conductivity"],
answer: 1,
},

{
q: "Which parameter determines battery capacity degradation?",
options: ["State of Health","Current ripple","State of Charge","Voltage stability"],
answer: 0,
},

{
q: "Lithium-ion batteries are sensitive to:",
options: ["Balanced load","Overcharging","Stable current","Low voltage ripple"],
answer: 1,
},

{
q: "Which system prevents battery overheating?",
options: ["Mechanical support","Thermal management system","Structural design","Packaging system"],
answer: 1,
},

{
q: "Which battery parameter is monitored to prevent overcurrent?",
options: ["Voltage","Temperature","Pressure","Current"],
answer: 3,
},

{
q: "Battery pack voltage depends on:",
options: ["Series cell connection","Cell casing","Parallel cell connection","Electrolyte color"],
answer: 0,
},

{
q: "Parallel cell connection increases:",
options: ["Voltage","Resistance","Capacity","Frequency"],
answer: 2,
},

{
q: "Series cell connection increases:",
options: ["Capacity","Heat","Voltage","Resistance"],
answer: 2,
},

{
q: "Which condition causes internal cell damage?",
options: ["Balanced load","Normal discharge","Over-discharge","Controlled charge"],
answer: 2,
},

{
q: "Battery thermal runaway is caused by:",
options: ["Balanced voltage","Excess heat generation","Stable current","Low temperature"],
answer: 1,
},

{
q: "Which component stores electrical energy in battery?",
options: ["Casing","Electrodes","Terminals","Connectors"],
answer: 1,
},

{
q: "Which system communicates battery data to vehicle controller?",
options: ["Brake system","Gear assembly","BMS communication interface","Mechanical linkage"],
answer: 2,
},

{
q: "Which condition is harmful to lithium batteries?",
options: ["Short circuit","Proper cooling","Balanced charge","Controlled load"],
answer: 0,
},

{
q: "Battery pack monitoring ensures:",
options: ["Reduced efficiency","Safe operation","Increased mass","Increased leakage"],
answer: 1,
},

{
q: "Which element carries electrons in external circuit?",
options: ["Electrolyte","Separator","Cathode","Conductor"],
answer: 3,
},

{
q: "BMS prevents battery damage by:",
options: ["Monitoring parameters","Increasing heat","Increasing voltage","Increasing mass"],
answer: 0,
},

{
q: "Lithium-ion battery safety depends on:",
options: ["Heavy connectors","Proper management","External insulation","Larger casing"],
answer: 1,
},

{
q: "Which electrode releases lithium ions during discharge?",
options: ["Cathode","Separator","Electrolyte","Anode"],
answer: 3,
},

{
q: "Which BMS feature ensures equal charge among cells?",
options: ["Voltage boosting","Cell balancing","Current filtering","Mechanical locking"],
answer: 1,
},

{
q: "Which factor causes battery aging?",
options: ["Balanced load","Proper cooling","Stable temperature","Repeated charge cycles"],
answer: 3,
},

{
q: "Which device isolates battery pack from load?",
options: ["Capacitor","Contactor","Sensor","Inductor"],
answer: 1,
},

{
q: "Which sensor is used for voltage monitoring?",
options: ["Accelerometer","Voltage divider","Microphone","Gyroscope"],
answer: 1,
},

{
q: "Battery health estimation helps in:",
options: ["Increasing connectors","Improving color","Predicting battery life","Increasing battery size"],
answer: 2,
},

{
q: "Which condition may cause battery swelling?",
options: ["Gas formation","Stable voltage","Cooling system","Balanced charge"],
answer: 0,
},

{
q: "Which battery type has high cycle life?",
options: ["Zinc carbon","Lithium-ion","Lead acid","Alkaline"],
answer: 1,
},

{
q: "BMS helps prevent:",
options: ["Over-discharge","Proper charging","Balanced voltage","Controlled current"],
answer: 0,
},

{
q: "Which component detects battery temperature rise?",
options: ["Thermistor","Capacitor","Diode","Inductor"],
answer: 0,
},

{
q: "Which parameter affects battery efficiency?",
options: ["Internal resistance","Terminal length","Outer casing","Color coating"],
answer: 0,
},

{
q: "Which battery pack configuration increases current capability?",
options: ["Series connection","Single cell","Parallel connection","Open circuit"],
answer: 2,
},

{
q: "Lithium-ion batteries store energy through:",
options: ["Mechanical compression","Magnetic induction","Electrochemical reaction","Optical emission"],
answer: 2,
},

{
q: "BMS alerts driver using:",
options: ["Mechanical alarm","Fault signals","Optical mirror","Gear vibration"],
answer: 1,
},

{
q: "Which condition leads to rapid battery degradation?",
options: ["Balanced discharge","High temperature","Stable environment","Controlled charging"],
answer: 1,
},

{
q: "Which system ensures safe battery charging?",
options: ["Charging control system","Structural support","Mechanical linkage","Cooling fins"],
answer: 0,
},

{
q: "Which process occurs during battery charging?",
options: ["Lithium ions move to anode","Electrolyte evaporates","Lithium ions move to cathode","Separator dissolves"],
answer: 0,
},

{
q: "Which component stores lithium ions during discharge?",
options: ["Electrolyte","Anode","Cathode","Separator"],
answer: 2,
},

{
q: "Which factor affects battery safety most?",
options: ["Connector shape","Temperature control","Cell color","External label"],
answer: 1,
},

{
q: "Which BMS function detects cell imbalance?",
options: ["Mechanical sensing","Voltage monitoring","Optical detection","Heat insulation"],
answer: 1,
},

{
q: "Battery pack includes:",
options: ["Motors only","Cells, sensors, and BMS","Transformers only","Gear assemblies"],
answer: 1,
},

{
q: "Which failure can cause battery fire?",
options: ["Thermal runaway","Controlled current","Balanced load","Stable voltage"],
answer: 0,
},

{
q: "Which component separates electrodes physically?",
options: ["Separator","Cathode","Electrolyte","Anode"],
answer: 0,
},

{
q: "Lithium-ion batteries have:",
options: ["Low efficiency","High energy density","Low voltage","Large mass"],
answer: 1,
},

{
q: "Which device monitors battery pack current?",
options: ["Voltage sensor","Thermistor","Current sensor","Gyroscope"],
answer: 2,
},

{
q: "Which process ensures equal cell charge?",
options: ["Voltage boosting","Heat generation","Cell balancing","Mechanical locking"],
answer: 2,
},

{
q: "Which system protects battery pack during faults?",
options: ["Amplifier","Protection circuit","Oscillator","Motor driver"],
answer: 1,
},

{
q: "Lithium-ion battery cathodes commonly contain:",
options: ["Copper sheets","Lithium metal oxides","Iron plates","Zinc rods"],
answer: 1,
},

{
q: "Which factor determines battery performance?",
options: ["Terminal color","Outer casing","Cell chemistry","Label type"],
answer: 2,
},

{
q: "Which component monitors individual cell voltages?",
options: ["Cooling fan","Transformer","BMS controller","Capacitor bank"],
answer: 2,
},

{
q: "Which condition increases battery internal resistance?",
options: ["Cooling","Balanced charge","Aging","Stable operation"],
answer: 2,
},

{
q: "Lithium-ion batteries require:",
options: ["Protection circuits","Large casing","Heavy connectors","Thick insulation"],
answer: 0,
},

{
q: "Which system estimates battery remaining life?",
options: ["Voltage boosting","SOH estimation","SOC balancing","Thermal insulation"],
answer: 1,
},

{
q: "Which battery feature supports fast charging?",
options: ["High external resistance","Thick casing","Low internal resistance","Heavy connectors"],
answer: 2,
},

{
q: "Which component helps dissipate battery heat?",
options: ["Voltage sensor","Cooling system","Relay","Capacitor"],
answer: 1,
},

{
q: "Lithium-ion batteries are widely used in:",
options: ["Hydraulic pumps","Steam engines","Electric vehicles","Diesel generators"],
answer: 2,
},

{
q: "Which parameter indicates battery charge level?",
options: ["Internal resistance","Thermal resistance","State of Charge","State of Health"],
answer: 2,
},

{
q: "BMS ensures battery:",
options: ["Large casing","Safe operation","High mass","Heavy structure"],
answer: 1,
},

{
q: "Battery pack safety depends on:",
options: ["Paint color","Connector shape","BMS monitoring","Wire length"],
answer: 2,
},

{
q: "Which process protects battery cells from damage?",
options: ["Heat generation","Voltage boosting","Cell balancing","Signal amplification"],
answer: 2,
},

{
q: "Lithium-ion batteries store energy in:",
options: ["Mechanical form","Chemical form","Thermal form","Magnetic form"],
answer: 1,
},

{
q: "Which device controls battery disconnection?",
options: ["Diode","Resistor","Contactor","Capacitor"],
answer: 2,
},

{
q: "Which factor improves battery lifespan?",
options: ["Proper charging","Short circuit","Overcharging","Excess heat"],
answer: 0,
},

{
q: "Which BMS feature improves battery safety?",
options: ["Signal amplification","Mechanical locking","Voltage boosting","Fault detection"],
answer: 3,
},

{
q: "Which system ensures battery temperature remains safe?",
options: ["Mechanical support","Thermal management","Structural casing","Optical sensing"],
answer: 1,
},

{
q: "Which device measures pack current?",
options: ["Voltage divider","Thermistor","Current sensor","Capacitor"],
answer: 2,
},

{
q: "Which system monitors battery pack status?",
options: ["Cooling fan","Amplifier","Battery Management System","Voltage regulator"],
answer: 2,
},
  ]
