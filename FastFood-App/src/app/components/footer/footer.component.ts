import { OrderService } from './../../services/order.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @ViewChild("modal_order", {static: false}) modal_order:any;
  @ViewChild("modal_num_order", {static: false}) modal_num_order:any;

  constructor(
    private modalService: NgbModal,
    public OrderService: OrderService
  ) { }

  ngOnInit() {
  }

  openOrder(){
    this.modalService.open(this.modal_order, {windowClass: "my-modal-dialog"}).result.then(result => {
      if(result === 'yes'){
        console.log('vamos a crear el pedido');
        this.OrderService.createOrder().subscribe(data => {
          console.log("se ha creado el objeto", data);
          this.OrderService.clearOrder();
          this.modalService.open(this.modal_num_order);
        }, error => {
          console.error("ha habido un error "+ error);
          
        })
        
      }else{
        console.log('se cancelo el pedido');
      }
    })
  }

}
