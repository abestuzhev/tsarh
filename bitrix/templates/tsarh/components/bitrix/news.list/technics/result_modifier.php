<?
if(!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true)
    die();


if(CModule::IncludeModule("iblock")){
    $arOrder = [
        $arParams["SORT_BY1"]=>$arParams["SORT_ORDER1"],
        $arParams["SORT_BY2"]=>$arParams["SORT_ORDER2"],
    ];

    $arFilter = [
      "IBLOCK_ID" =>  $arParams["IBLOCK_ID"]
    ];

    $arSelect = [
        "NAME",
        "UF_PICTURE",
        "UF_PICTURE_HOVER"
    ];

    $db_result = CIBlockSection::GetList($arOrder, $arFilter,false,$arSelect);

    while ($a = $db_result->Fetch()){
        $arSections[] = $a;
    }
}

if(!empty($arResult["ITEMS"])) {
    foreach ($arSections as $key => $item) {
        $arSectionItem = [];
        foreach ($arResult["ITEMS"] as $arItem) {
            if($item["ID"] == $arItem["IBLOCK_SECTION_ID"]){
                $arSectionItem[] = $arItem;
            }
        }
        $arSections[$key]["ITEMS"] = $arSectionItem;
    }
    $arResult["ITEMS"] = $arSections;
}

//print_var($arResult["ITEMS"]);