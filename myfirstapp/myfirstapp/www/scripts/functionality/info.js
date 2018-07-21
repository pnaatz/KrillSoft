var RoutinePatientCare = new ProtocolNode("Routine Patient Care", "General Patient Care", 8,12);
var HighQualityCPRAdult = new ProtocolNode("High Quality CPR - Adult", "General Patient Care", 13,14);

nodes.push(RoutinePatientCare);
nodes.push(HighQualityCPRAdult);

var AdrenalInsufficiency = new ProtocolNode("Adrenal Insufficiency/Adrenal Crisis Adult and Pediatric", "Medical Protocols", 16);
var AllergicReactionAdult = new ProtocolNode("Allergic Reaction/Anaphylaxis Adult", "Medical Protocols", 17);
var AllergicReactionPediatric = new ProtocolNode("Allergic Reaction/Anaphylaxis Pediatric", "Medical Protocols", 18);
var AlteredMentalAdult = new ProtocolNode("Altered Mental/Neurological Status/Diabetic Emergencies/Coma - Adult", "Medical Protocols", 19);
var AlteredMentalPediatric = new ProtocolNode("Altered Mental/Neurological Status/Diabetic Emergencies/Coma - Pediatric", "Medical Protocols", 20);
var BehavioralEmergencies = new ProtocolNode("Behavioral Emergencies Adult and Pediatric", "Medical Protocols", 21, 22);
var BehavioralEmergenciesRestraint = new ProtocolNode("Behavioral Emergencies: Restraint Adult and Pediatric", "Medical Protocols", 23);
var BronchospasmAdult = new ProtocolNode("Bronchospasm/Respiratory Distress - Adult", "Medical Protocols", 24);
var BronchospasmPediatric = new ProtocolNode("Bronchospasm/Respiratory Distress - Pediatric", "Medical Protocols", 25, 26);
var Hyperthermia = new ProtocolNode("Hyperthermia (Enviormental) Adult and Pediatric", "Medical Protocols", 27);
var Hypothermia = new ProtocolNode("Hypothermia (Enviormental) Adult and Pediatric", "Medical Protocols", 28);
var NerveAgents = new ProtocolNode("Nerve Agents Organophosphate Poisoning - Adult and Pediatric", "Medical Protocols", 29, 31);
var ObstetricalEmergencies = new ProtocolNode("Obstetrical Emergencies", "Medical Protocols", 32);
var NewlyBornCare = new ProtocolNode("Newley Born Care", "Medical Protocols", 33);
var ResuscitationNewlyBorn = new ProtocolNode("Resuscitation of the Newley Born", "Medical Protocols", 34);
var PainAndNauseaManagement = new ProtocolNode("Pain and Nausea Management - Adult and Pediatric", "Medical Protocols", 35);
var SubstanceAbuse = new ProtocolNode("Poisoning/Substance Abuse/Overdoes/Toxicology - Adult and Pediatric", "Medical Protocols", 36);
var SeizuresAdult = new ProtocolNode("Seizures - Adult", "Medical Protocols", 37);
var SeizuresPediatric = new ProtocolNode("Seizures - Pediatric", "Medical Protocols", 38);
var ShockAdult = new ProtocolNode("Shock - Adult", "Medical Protocols", 39, 40);
var ShockPediatric = new ProtocolNode("Shock - Pediatric", "Medical Protocols", 41, 42);
var SepsisAdult = new ProtocolNode("Sepsis - Adult", "Medical Protocols", 43);
var Stroke = new ProtocolNode("Stroke", "Medical Protocols", 44, 45);

nodes.push(AdrenalInsufficiency);
nodes.push(AllergicReactionAdult);
nodes.push(AllergicReactionPediatric);
nodes.push(AlteredMentalAdult);
nodes.push(AlteredMentalPediatric);
nodes.push(BehavioralEmergencies);
nodes.push(BehavioralEmergenciesRestraint);
nodes.push(BronchospasmAdult);
nodes.push(BronchospasmPediatric);
nodes.push(Hyperthermia);
nodes.push(Hypothermia);
nodes.push(NerveAgents);
nodes.push(ObstetricalEmergencies);
nodes.push(NewlyBornCare);
nodes.push(ResuscitationNewlyBorn);
nodes.push(PainAndNauseaManagement);
nodes.push(SubstanceAbuse);
nodes.push(SeizuresAdult);
nodes.push(SeizuresPediatric);
nodes.push(ShockAdult);
nodes.push(ShockPediatric);
nodes.push(SepsisAdult);
nodes.push(Stroke);

var AcuteCoronarySyndromeAdult = new ProtocolNode("Acute Coronary Syndrome - Adult", "Cardiac Protocols", 48, 49);
var AcuteCoronarySyndromeAdultChecklist = new ProtocolNode("Acute Coronary Syndrome - Adult Fibrinonlytic Checklist", "Cardiac Protocols", 50);
var AtrialFibrillation = new ProtocolNode("Atrial Fibrillation/Flutter", "Cardiac Protocols", 51);
var BradycardiaAdult = new ProtocolNode("Bradycardia - Adult", "Cardiac Protocols", 52);
var BradycardiaPediatric = new ProtocolNode("Bradycardia - Pediatric", "Cardiac Protocols", 53);
var CardiacArrestAdult = new ProtocolNode("Cardiac Arrest (ADULT): Asystole/ Pulseless Electrical Activity", "Cardiac Protocols", 54);
var CardiacArrestPediatric = new ProtocolNode("Cardiac Arrest (PEDIATRIC): Asystole/ Pulseless Electrical Activity", "Cardiac Protocols", 55);
var CardiacArrestAdultVentricular = new ProtocolNode("Cardiac Arrest (ADULT): Ventricular Fibrillation/Pulseless Ventricular Tachycardia", "Cardiac Protocols", 56);
var CardiacArrestPediatricVentricular = new ProtocolNode("Cardiac Arrest (PEDIATRIC): Ventricular Fibrillation/Pulseless Ventricular Tachycardia", "Cardiac Protocols", 57);
var CongrestiveHeartFailure = new ProtocolNode("Congrestive Heart Failure (Pulmonary Edema)", "Cardiac Protocols", 58);
var TargetedTemperatureAdult = new ProtocolNode("Targeted Temperature Management - Adult", "Cardiac Protocols", 59);
var PostResuscitativeCare = new ProtocolNode("Post Resuscitative Care/ROSC - Adult and Pediatric", "Cardiac Protocols", 60);
var SuperventricularAdult = new ProtocolNode("Supraventricular Tachycardia - Adult", "Cardiac Protocols", 61);
var SuperventricularPediatric = new ProtocolNode("Supraventricular Tachycardia - Pediatric", "Cardiac Protocols", 62);
var VentricularTachycardia = new ProtocolNode("Ventricular Tachycardia with Pulses - Adult and Pediatric", "Cardiac Protocols", 63);

nodes.push(AcuteCoronarySyndromeAdult);
nodes.push(AcuteCoronarySyndromeAdultChecklist);
nodes.push(AtrialFibrillation);
nodes.push(BradycardiaAdult);
nodes.push(BradycardiaPediatric);
nodes.push(CardiacArrestAdult);
nodes.push(CardiacArrestPediatric);
nodes.push(CardiacArrestAdultVentricular);
nodes.push(CardiacArrestPediatricVentricular);
nodes.push(CongrestiveHeartFailure);
nodes.push(TargetedTemperatureAdult);
nodes.push(PostResuscitativeCare);
nodes.push(SuperventricularAdult);
nodes.push(SuperventricularPediatric);
nodes.push(VentricularTachycardia);

var burns = new ProtocolNode("Burns/Inhalation/Electrocution and Lightning Strike Injuries - Adult and Pediatric", "Trauma Protocols", 66, 67);
var drowning = new ProtocolNode("Drowning/Submersion Injuries - Adult and Pediatric", "Trauma Protocols", 68);
var eyeEmergencies = new ProtocolNode("Eye Emergencies - Adult and Pediatric", "Trauma Protocols", 69);
var HeadTrauma = new ProtocolNode("Head Trauma and Injuries - Adult and Pediatric", "Trauma Protocols", 70);
var MultisystemTrauma = new ProtocolNode("Multisystem Trauma - Adult and Pediatric", "Trauma Protocols", 71);
var MusculoskeletalInjuries = new ProtocolNode("Musculoskeletal Injuries - Adult and Pediatric", "Trauma Protocols", 72);
var SoftTissues = new ProtocolNode("Soft Tissue/Crush Injuries - Adult and Pediatric", "Trauma Protocols", 73);
var SpinalColumn = new ProtocolNode("Spinal Column/Cord Injuries - Adult and Pediatric", "Trauma Protocols", 74);
var ThoracicTrauma = new ProtocolNode("Thoracic Trauma - Adult and Pediatric", "Trauma Protocols", 75);
var TraumaticAmputations = new ProtocolNode("Traumatic Amputations - Adult and Pediatric", "Trauma Protocols", 76);
var TraumaticCardiacArrest = new ProtocolNode("Traumatic Cardiac Arrest - Adult and Pediatric", "Trauma Protocols", 77);

nodes.push(burns);
nodes.push(drowning);
nodes.push(eyeEmergencies);
nodes.push(HeadTrauma);
nodes.push(MultisystemTrauma);
nodes.push(MusculoskeletalInjuries);
nodes.push(SoftTissues);
nodes.push(SpinalColumn);
nodes.push(ThoracicTrauma);
nodes.push(TraumaticAmputations);
nodes.push(TraumaticCardiacArrest);

var UpperAirwayObstructionAdult = new ProtocolNode("Upper Airway Obstruction - Adult", "Airway Protocols and Procedures", 80);
var UpperAirwayObstructionPediatrics = new ProtocolNode("Upper Airway Obstruction - Pediatrics", "Airway Protocols and Procedures", 81);
var DifficultAirwayAdult = new ProtocolNode("Difficult Airway - Adult", "Airway Protocols and Procedures", 82);
var TracheostomyTubeObstruction = new ProtocolNode("Tracheostomy Tube Obstruction Management - Adult and Pediatric", "Airway Protocols and Procedures", 83);

nodes.push(UpperAirwayObstructionAdult);
nodes.push(UpperAirwayObstructionPediatrics);
nodes.push(DifficultAirwayAdult);
nodes.push(TracheostomyTubeObstruction);

var MedicalDirectorOptions = new ProtocolNode("Medical Directors Options", "Medical Directors Options", 86);
var BLSASSistedAlbuteral = new ProtocolNode("BLS Assisted Albuterol - Adult and Pediatric", "Medical Directors Options", 87);
var NeedleCric = new ProtocolNode("Needle Cricothyrotomy", "Medical Directors Options", 88, 89);
var SelectiveSpinal = new ProtocolNode("Selective Spinal Assessment", "Medical Directors Options", 90, 92);
var UrbanSearch = new ProtocolNode("Urban Search and Rescue (USAR) Medical Special Specialist", "Medical Directors Options", 93, 103);
var TranexamicAcid = new ProtocolNode("Tranexamic Acid", "Medical Directors Options", 104);
var InjectEpinephrine = new ProtocolNode("Check and Inject Epinephrine by BLS Providers", "Medical Directors Options", 105);
var AcetaminophenIV = new ProtocolNode("Acetaminophen IV", "Medical Directors Options", 106);

nodes.push(MedicalDirectorOptions);
nodes.push(BLSASSistedAlbuteral);
nodes.push(NeedleCric);
nodes.push(SelectiveSpinal);
nodes.push(UrbanSearch);
nodes.push(TranexamicAcid);
nodes.push(InjectEpinephrine);
nodes.push(AcetaminophenIV);

var Air = new ProtocolNode("Air Medical Transport", "Medical Policies and Procedures", 108);
var ElectronicControlWeapons = new ProtocolNode("Electronic Control Weapons", "Medical Policies and Procedures", 109);
var MOLST = new ProtocolNode("Medical Orders for Life Sustaining Treatment (MOLST) and Comfort Care/Do Not Resuscitate (DNR) Order Verification", "Medical Policies and Procedures", 110, 112);
var PediatricTransport = new ProtocolNode("Pediatric Transport", "Medical Policies and Procedures", 113, 114);
var Refusal = new ProtocolNode("Refusal of Medical Care and Ambulance Transport", "Medical Policies and Procedures", 115, 116);
var SedationandAnalgesiaElectricalTherapy = new ProtocolNode("Sedation and Analgesia for Electrical Therapy - Adult and Pediatric", "Medical Policies and Procedures", 117);
var WitholdingCesationOfResuscitation = new ProtocolNode("Withholding and Cessation of Resuscitation", "Medical Policies and Procedures", 118, 119);
var VAD = new ProtocolNode("Ventricular Assist Devices (VADs)", "Medical Policies and Procedures", 120, 121);
var ProcessforChange = new ProtocolNode("Process for Changes to the Statewide Treatement Protocols", "Medical Policies and Procedures", 122, 123);

nodes.push(Air);
nodes.push(ElectronicControlWeapons);
nodes.push(MOLST);
nodes.push(PediatricTransport);
nodes.push(Refusal);
nodes.push(SedationandAnalgesiaElectricalTherapy);
nodes.push(WitholdingCesationOfResuscitation);
nodes.push(VAD);
nodes.push(ProcessforChange);

for (var i = 0; i < nodes.length; i++){
    createNode(nodes[i]);
}