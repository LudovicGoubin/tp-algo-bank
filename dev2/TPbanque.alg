<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="AFFICHER nouveau_solde" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2para="" F2lignes="" F2defaut="" F2etat="inactif"/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param epaisseurPoint="2" nbDecimales="8" totalBoucles="5000000" arrondiAuto="vrai" epaisseurLigne="2" maxBoucle="500000" totalAffichages="1000"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#decouvert" algoitem="decouvert EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#solde" algoitem="solde EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#retrait" algoitem="retrait EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#nouveau_solde" algoitem="nouveau_solde EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="4#quel est le montant de decouvert autorisé#1" algoitem="AFFICHER &quot;quel est le montant de decouvert autorisé&quot;"/>
        <item code="2#decouvert#pasliste" algoitem="LIRE decouvert"/>
        <item code="4#quel est le solde de votre compte en cours #1" algoitem="AFFICHER &quot;quel est le solde de votre compte en cours &quot;"/>
        <item code="2#solde#pasliste" algoitem="LIRE solde"/>
        <item code="4#quel est le montant souhaité de retrait #1" algoitem="AFFICHER &quot;quel est le montant souhaité de retrait &quot;"/>
        <item code="2#retrait#pasliste" algoitem="LIRE retrait"/>
        <item code="6#decouvert == 0" algoitem="SI (decouvert == 0) ALORS">
            <item code="7#debutsi" algoitem="DEBUT_SI"/>
            <item code="6#solde >= retrait" algoitem="SI (solde >= retrait) ALORS">
                <item code="7#debutsi" algoitem="DEBUT_SI"/>
                <item code="4#quel est le montant souhaité du retrait #1" algoitem="AFFICHER &quot;quel est le montant souhaité du retrait &quot;"/>
                <item code="2#retrait#pasliste" algoitem="LIRE retrait"/>
                <item code="5#nouveau_solde#solde - retrait#pasliste" algoitem="nouveau_solde PREND_LA_VALEUR solde - retrait"/>
                <item code="4#votre solde actuel #1" algoitem="AFFICHER &quot;votre solde actuel &quot;"/>
                <item code="3#nouveau_solde#1#pasliste" algoitem="AFFICHER nouveau_solde"/>
                <item code="8#finsi" algoitem="FIN_SI"/>
                <item code="9#sinon" algoitem="SINON">
                    <item code="10#debutsinon" algoitem="DEBUT_SINON"/>
                    <item code="4#votre solde est insuffisant #1" algoitem="AFFICHER &quot;votre solde est insuffisant &quot;"/>
                    <item code="11#finsinon" algoitem="FIN_SINON"/>
                </item>
            </item>
            <item code="8#finsi" algoitem="FIN_SI"/>
        </item>
        <item code="6#decouvert > 0" algoitem="SI (decouvert > 0) ALORS">
            <item code="7#debutsi" algoitem="DEBUT_SI"/>
            <item code="6#retrait &lt;= decouvert " algoitem="SI (retrait &lt;= decouvert ) ALORS">
                <item code="7#debutsi" algoitem="DEBUT_SI"/>
                <item code="4#quel est le montant de votre retrait#0" algoitem="AFFICHER &quot;quel est le montant de votre retrait&quot;"/>
                <item code="2#retrait#pasliste" algoitem="LIRE retrait"/>
                <item code="5#nouveau_solde#solde - retrait#pasliste" algoitem="nouveau_solde PREND_LA_VALEUR solde - retrait"/>
                <item code="6#nouveau_solde >= 0" algoitem="SI (nouveau_solde >= 0) ALORS">
                    <item code="7#debutsi" algoitem="DEBUT_SI"/>
                    <item code="4#votre nouveau solde est #1" algoitem="AFFICHER &quot;votre nouveau solde est &quot;"/>
                    <item code="3#nouveau_solde#1#pasliste" algoitem="AFFICHER nouveau_solde"/>
                    <item code="8#finsi" algoitem="FIN_SI"/>
                    <item code="9#sinon" algoitem="SINON">
                        <item code="10#debutsinon" algoitem="DEBUT_SINON"/>
                        <item code="4#votre decouvert est de #0" algoitem="AFFICHER &quot;votre decouvert est de &quot;"/>
                        <item code="3#nouveau_solde#0#pasliste" algoitem="AFFICHER nouveau_solde"/>
                        <item code="11#finsinon" algoitem="FIN_SINON"/>
                    </item>
                </item>
                <item code="8#finsi" algoitem="FIN_SI"/>
                <item code="9#sinon" algoitem="SINON">
                    <item code="10#debutsinon" algoitem="DEBUT_SINON"/>
                    <item code="4#votre solde est insuffisant #1" algoitem="AFFICHER &quot;votre solde est insuffisant &quot;"/>
                    <item code="11#finsinon" algoitem="FIN_SINON"/>
                </item>
            </item>
            <item code="8#finsi" algoitem="FIN_SI"/>
        </item>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
