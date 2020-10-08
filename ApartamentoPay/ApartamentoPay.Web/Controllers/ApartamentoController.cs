using ApartamentoPay.Dominio.Contratos;
using ApartamentoPay.Dominio.Entidades;
using Microsoft.AspNetCore.Mvc;
using System;

namespace ApartamentoPay.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApartamentoController : Controller
    {
        private readonly IApartamentoRepositorio _apartamentoRepositorio;

        public ApartamentoController(IApartamentoRepositorio apartamentoRepositorio)
        {
            _apartamentoRepositorio = apartamentoRepositorio;
        }

        /// <summary>
        /// Retorna todos os Apartamentos.
        /// </summary>
        /// <returns code="200"> A lista de apartamentos foi obtida com sucesso.</returns>
        /// <returns code="400"> A lista de apartamentos não foi obtida com sucesso.</returns>
        /// 
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_apartamentoRepositorio.ObterTodos());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        /// <summary>
        /// Adiciona um novo Apartamento.
        /// </summary>
        /// <returns code="201"> Foi adicionado um apartamento com sucesso. </returns>
        /// <returns code="400"> Não foi adicionado um apartamento. </returns>
        [HttpPost]
        public IActionResult Post([FromBody]Apartamento apartamento)
        {
            try
            {
                _apartamentoRepositorio.Adicionar(apartamento);
                return Created("api/apartamento", apartamento);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }
    }
}