<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="AFFICHERCALCUL ALGOBOX_ARRONDIR(Agios,2), Agios=decouUtl*nbrJour*(10/100)/365"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2lignes="" F2etat="inactif" F2para="" F2defaut=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param epaisseurLigne="2" totalAffichages="1000" nbDecimales="8" epaisseurPoint="2" maxBoucle="500000" arrondiAuto="vrai" totalBoucles="5000000"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#decouAut" algoitem="decouAut EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#decouUtl" algoitem="decouUtl EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#nbrJour" algoitem="nbrJour EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#Agios" algoitem="Agios EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="4#Saisissez votre découvert autorisé #0" algoitem="AFFICHER &quot;Saisissez votre découvert autorisé &quot;"/>
        <item code="2#decouAut#pasliste" algoitem="LIRE decouAut"/>
        <item code="6#decouAut==0" algoitem="SI (decouAut==0) ALORS">
            <item code="7#debutsi" algoitem="DEBUT_SI"/>
            <item code="4#Découvert non autorisé => pas d'agios#0" algoitem="AFFICHER &quot;Découvert non autorisé => pas d'agios&quot;"/>
            <item code="8#finsi" algoitem="FIN_SI"/>
        </item>
        <item code="15#decouAut&lt;100 OU decouAut>2000" algoitem="TANT_QUE (decouAut&lt;100 OU decouAut>2000) FAIRE">
            <item code="16#debuttantque" algoitem="DEBUT_TANT_QUE"/>
            <item code="4#Le découvert autorisé est compris entre 100€ et 2000€#1" algoitem="AFFICHER &quot;Le découvert autorisé est compris entre 100€ et 2000€&quot;"/>
            <item code="2#decouAut#pasliste" algoitem="LIRE decouAut"/>
            <item code="17#fintantque" algoitem="FIN_TANT_QUE"/>
        </item>
        <item code="4#Saisissez le montant du découvert utilisé #0" algoitem="AFFICHER &quot;Saisissez le montant du découvert utilisé &quot;"/>
        <item code="2#decouUtl#pasliste" algoitem="LIRE decouUtl"/>
        <item code="4#Depuis combien de jour êtes-vous en découvert #0" algoitem="AFFICHER &quot;Depuis combien de jour êtes-vous en découvert &quot;"/>
        <item code="2#nbrJour#pasliste" algoitem="LIRE nbrJour"/>
        <item code="15#nbrJour&lt;1 OU nbrJour>365" algoitem="TANT_QUE (nbrJour&lt;1 OU nbrJour>365) FAIRE">
            <item code="16#debuttantque" algoitem="DEBUT_TANT_QUE"/>
            <item code="4#Le nombre de jour doit être compris entre 1 et 365#1" algoitem="AFFICHER &quot;Le nombre de jour doit être compris entre 1 et 365&quot;"/>
            <item code="2#nbrJour#pasliste" algoitem="LIRE nbrJour"/>
            <item code="17#fintantque" algoitem="FIN_TANT_QUE"/>
        </item>
        <item code="4#Avec un taux de 10%, vos agios à payer sont de : #0" algoitem="AFFICHER &quot;Avec un taux de 10%, vos agios à payer sont de : &quot;"/>
        <item code="20#ALGOBOX_ARRONDIR(Agios,2), Agios=decouUtl*nbrJour*(10/100)/365#0" algoitem="AFFICHERCALCUL ALGOBOX_ARRONDIR(Agios,2), Agios=decouUtl*nbrJour*(10/100)/365"/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
