package se.toobianordic.inventory.models.item.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import se.toobianordic.inventory.models.item.service.ItemService;

@CrossOrigin
@Controller
@RequestMapping("api/v1/inventory")
public class ItemController {
    private ItemService itemService;

    public ItemController(ItemService itemService) {
    }

}
