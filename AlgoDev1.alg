<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="TANT_QUE (Overdraft&lt;100 OU Overdraft>2000) FAIRE"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2lignes="" F2defaut="" F2para="" F2etat="inactif"/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param maxBoucle="500000" epaisseurLigne="2" totalAffichages="1000" arrondiAuto="vrai" totalBoucles="5000000" epaisseurPoint="2" nbDecimales="8"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="Deposit EST_DU_TYPE NOMBRE" code="1#NOMBRE#Deposit"/>
        <item algoitem="Overdraft EST_DU_TYPE NOMBRE" code="1#NOMBRE#Overdraft"/>
        <item algoitem="isOverdraft EST_DU_TYPE CHAINE" code="1#CHAINE#isOverdraft"/>
        <item algoitem="Balance EST_DU_TYPE NOMBRE" code="1#NOMBRE#Balance"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="AFFICHER &quot;Bienvenue chez GTM Bank&quot;" code="4#Bienvenue chez GTM Bank#1"/>
        <item algoitem="AFFICHER &quot;Voulez vous avoir un découvert (y ou Y oui, n'importe quel caractère pour non)&quot;" code="4#Voulez vous avoir un découvert (y ou Y oui, n'importe quel caractère pour non)#1"/>
        <item algoitem="LIRE isOverdraft" code="2#isOverdraft#pasliste"/>
        <item algoitem="SI (isOverdraft==&quot;y&quot; OU isOverdraft==&quot;Y&quot;) ALORS" code="6#isOverdraft==&quot;y&quot; OU isOverdraft==&quot;Y&quot;">
            <item algoitem="DEBUT_SI" code="7#debutsi"/>
            <item algoitem="LIRE Overdraft" code="2#Overdraft#pasliste"/>
            <item algoitem="TANT_QUE (Overdraft&lt;100 OU Overdraft>2000) FAIRE" code="15#Overdraft&lt;100 OU Overdraft>2000">
                <item algoitem="DEBUT_TANT_QUE" code="16#debuttantque"/>
                <item algoitem="LIRE Overdraft" code="2#Overdraft#pasliste"/>
                <item algoitem="FIN_TANT_QUE" code="17#fintantque"/>
            </item>
            <item algoitem="AFFICHER &quot;Le montant de votre découvert est de: &quot;" code="4#Le montant de votre découvert est de: #0"/>
            <item algoitem="AFFICHER Overdraft" code="3#Overdraft#0#pasliste"/>
            <item algoitem="LIRE Deposit" code="2#Deposit#pasliste"/>
            <item algoitem="TANT_QUE (Deposit&lt;500) FAIRE" code="15#Deposit&lt;500">
                <item algoitem="DEBUT_TANT_QUE" code="16#debuttantque"/>
                <item algoitem="LIRE Deposit" code="2#Deposit#pasliste"/>
                <item algoitem="FIN_TANT_QUE" code="17#fintantque"/>
            </item>
            <item algoitem="FIN_SI" code="8#finsi"/>
            <item algoitem="SINON" code="9#sinon">
                <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                <item algoitem="Deposit PREND_LA_VALEUR 0" code="5#Deposit#0#pasliste"/>
                <item algoitem="TANT_QUE (Deposit&lt;500) FAIRE" code="15#Deposit&lt;500">
                    <item algoitem="DEBUT_TANT_QUE" code="16#debuttantque"/>
                    <item algoitem="AFFICHER &quot;Le montant de votre dépot doit etre supérieur à 500euros&quot;" code="4#Le montant de votre dépot doit etre supérieur à 500euros#0"/>
                    <item algoitem="LIRE Deposit" code="2#Deposit#pasliste"/>
                    <item algoitem="FIN_TANT_QUE" code="17#fintantque"/>
                </item>
                <item algoitem="FIN_SINON" code="11#finsinon"/>
            </item>
        </item>
        <item algoitem="AFFICHER &quot;Vos informations bancaires sont les suivantes: &quot;" code="4#Vos informations bancaires sont les suivantes: #1"/>
        <item algoitem="Balance PREND_LA_VALEUR Deposit" code="5#Balance#Deposit#pasliste"/>
        <item algoitem="AFFICHER &quot;Le soldes de vos comptes est de: &quot;" code="4#Le soldes de vos comptes est de: #0"/>
        <item algoitem="AFFICHER Balance" code="3#Balance#1#pasliste"/>
        <item algoitem="AFFICHER &quot;Votre découvert autorisé est de: &quot;" code="4#Votre découvert autorisé est de: #0"/>
        <item algoitem="AFFICHER Overdraft" code="3#Overdraft#0#pasliste"/>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
