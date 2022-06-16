<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="PAUSE"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2defaut="" F2etat="inactif" F2para="" F2lignes=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param nbDecimales="8" epaisseurPoint="2" totalBoucles="5000000" epaisseurLigne="2" maxBoucle="500000" arrondiAuto="vrai" totalAffichages="1000"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#Deposit" algoitem="Deposit EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#Overdraft" algoitem="Overdraft EST_DU_TYPE NOMBRE"/>
        <item code="1#CHAINE#isOverdraft" algoitem="isOverdraft EST_DU_TYPE CHAINE"/>
        <item code="1#CHAINE#notOverdraft" algoitem="notOverdraft EST_DU_TYPE CHAINE"/>
        <item code="1#NOMBRE#Balance" algoitem="Balance EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="4#Bienvenue chez GTM Bank#1" algoitem="AFFICHER &quot;Bienvenue chez GTM Bank&quot;"/>
        <item code="4#Voulez vous avoir un découvert (y ou Y oui, n'importe quel caractère pour non)#1" algoitem="AFFICHER &quot;Voulez vous avoir un découvert (y ou Y oui, n'importe quel caractère pour non)&quot;"/>
        <item code="2#isOverdraft#pasliste" algoitem="LIRE isOverdraft"/>
        <item code="18#pause" algoitem="PAUSE"/>
        <item code="6#isOverdraft=y OR isOverdraft=Y" algoitem="SI (isOverdraft=y OR isOverdraft=Y) ALORS">
            <item code="7#debutsi" algoitem="DEBUT_SI"/>
            <item code="2#Overdraft#pasliste" algoitem="LIRE Overdraft"/>
            <item code="15#Overdraft&lt;100 ET Overdraft>2000" algoitem="TANT_QUE (Overdraft&lt;100 ET Overdraft>2000) FAIRE">
                <item code="16#debuttantque" algoitem="DEBUT_TANT_QUE"/>
                <item code="2#Overdraft#pasliste" algoitem="LIRE Overdraft"/>
                <item code="17#fintantque" algoitem="FIN_TANT_QUE"/>
            </item>
            <item code="8#finsi" algoitem="FIN_SI"/>
            <item code="9#sinon" algoitem="SINON">
                <item code="10#debutsinon" algoitem="DEBUT_SINON"/>
                <item code="2#Deposit#pasliste" algoitem="LIRE Deposit"/>
                <item code="15#Deposit&lt;500" algoitem="TANT_QUE (Deposit&lt;500) FAIRE">
                    <item code="16#debuttantque" algoitem="DEBUT_TANT_QUE"/>
                    <item code="2#Deposit#pasliste" algoitem="LIRE Deposit"/>
                    <item code="17#fintantque" algoitem="FIN_TANT_QUE"/>
                </item>
                <item code="11#finsinon" algoitem="FIN_SINON"/>
            </item>
        </item>
        <item code="3#Deposit#0#pasliste" algoitem="AFFICHER Deposit"/>
        <item code="3#Overdraft#0#pasliste" algoitem="AFFICHER Overdraft"/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
