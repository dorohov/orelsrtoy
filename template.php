<?if(!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED!==true)die();?>

<?

if($arResult['ITEM']['ID']) {
	
	//azbn_ed($arResult['ITEM']);
	
	$min_cost = azbn_apartment_cost($arResult['ITEM']['~PROPERTY_MIN_COST_VALUE']);
	
	$img_full = '';
	$img_sm = '';
	
	if(intval($arResult['ITEM']['PREVIEW_PICTURE'])) {
		//$img_full = CFile::GetPath($arResult['ITEM']['PREVIEW_PICTURE']);
		$img_sm = CFile::ResizeImageGet($arResult['ITEM']['PREVIEW_PICTURE'], array('width' => 465, 'height' => 565), BX_RESIZE_IMAGE_PROPORTIONAL, true);
	}
	
	if($arResult['ITEM']['~PROPERTY_DISCOUNT_VALUE'] != '') {
		
		$discount = explode(';', $arResult['ITEM']['~PROPERTY_DISCOUNT_VALUE']);
		//azbn_ed($discount);
	}
	
	if($arResult['ITEM']['~PROPERTY_END_QUARTER_VALUE'] != '') {
		
		$end_quarter = explode(';', $arResult['ITEM']['~PROPERTY_END_QUARTER_VALUE']);
		
	}
	
	?>
	
		<div class="objacts-item__item">
			<a href="<?=$arResult['ITEM']['DETAIL_PAGE_URL'];?>" class="objacts-item__inner">
				<div class="objacts-item__preview">
					<img src="<?=$img_sm['src'];?>" alt="">
				</div>
				<div class="objacts-item__label-block">
					<div class="objacts-item__label">
						<h3 class="objacts-item__street"><?=$arResult['ITEM']['NAME'];?></h3>
						<div class="objacts-item__district"><?=$arResult['DISTRICT']['NAME'];?> <?=$arResult['DISTRICT']['~PROPERTY_ENTITY_NAME_SHORT_VALUE'];?></div>
						
						<?
						if(count($discount)) {
						?>
						<div class="objacts-item__sale">
							<span class="objacts-item__sale-val"><?=$discount[1];?></span>
							<span class="objacts-item__sale-name"><?=$discount[0];?></span>
						</div>
						<?
						}
						?>
						
					</div>
					<div class="objacts-item__label">
						
						<?
						if(count($end_quarter)) {
						?>
						<div class="objacts-item__date"><span>Дата сдачи:</span> <?=$end_quarter[1];?> кв. <?=$end_quarter[0];?>г.</div>
						<?
						}
						?>
						
						<div class="objacts-item__cost">
							<span class="objacts-item__cost-text">Квартиры от</span> 
							<span class="objacts-item__cost-val"><?=$min_cost;?></span> 
							млн.
							<span class="objacts-item__cost-ruble"><svg class="icon-svg icon-ruble" role="img">
								<use xlink:href="<?=SITE_TEMPLATE_PATH;?>/img/svg/sprite.svg#ruble"></use>
							</svg></span> 
						</div>
					</div>
				</div>
				<div class="objacts-item__note">			
					
					<?
					if(count($discount)) {
					?>
					<div class="objacts-item__sale  is--note">
						<span class="objacts-item__sale-val  is--note"><?=$discount[1];?></span>
						<span class="objacts-item__sale-name  is--note"><?=$discount[0];?></span>
					</div>
					<?
					}
					?>
					
					<h3 class="objacts-item__street  is--note"><?=$arResult['ITEM']['NAME'];?></h3>
					<div class="objacts-item__district  is--note"><?=$arResult['DISTRICT']['NAME'];?> <?=$arResult['DISTRICT']['~PROPERTY_ENTITY_NAME_SHORT_VALUE'];?></div>
					
					<?
					if(count($end_quarter)) {
					?>
					<div class="objacts-item__date  is--note"><span>Дата сдачи:</span> <?=$end_quarter[1];?> кв. <?=$end_quarter[0];?>г.</div>
					<?
					}
					?>
					
					<div class="objacts-item__icon"><svg class="icon-svg icon-district" role="img">
						<use xlink:href="<?=SITE_TEMPLATE_PATH;?>/img/svg/sprite.svg#district"></use>
					</svg></div>			
					<div class="objacts-item__cost  is--note">
						<span class="objacts-item__cost-text   is--note">Квартиры от</span> 
						<span class="objacts-item__cost-val   is--note"><?=$min_cost;?></span> 
						млн.
						<span class="objacts-item__cost-ruble   is--note"><svg class="icon-svg icon-ruble" role="img">
							<use xlink:href="<?=SITE_TEMPLATE_PATH;?>/img/svg/sprite.svg#ruble"></use>
						</svg></span> 
					</div>
				</div>
			</a>
		</div> 
		
	
	<?
	
}
