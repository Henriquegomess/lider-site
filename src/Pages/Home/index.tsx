/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/iframe-has-title */
import { Box, Button, Divider, Input, Typography } from '@mui/material';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import React from 'react';
import { CardComponent } from '../../Components/Card';
import { CardGreenComponent } from '../../Components/CardGreen';
import { Header } from '../../Components/Header';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <a
        href="https://api.whatsapp.com/send?phone=92988422072&text=Texto%20aqui"
        target="_blank"
        style={{ position: 'fixed', bottom: '20px', right: '30px' }}
      >
        <svg
          enable-background="new 0 0 512 512"
          width="50"
          height="50"
          version="1.1"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M256.064,0h-0.128l0,0C114.784,0,0,114.816,0,256c0,56,18.048,107.904,48.736,150.048l-31.904,95.104  l98.4-31.456C155.712,496.512,204,512,256.064,512C397.216,512,512,397.152,512,256S397.216,0,256.064,0z"
            fill="#4CAF50"
          />
          <path
            d="m405.02 361.5c-6.176 17.44-30.688 31.904-50.24 36.128-13.376 2.848-30.848 5.12-89.664-19.264-75.232-31.168-123.68-107.62-127.46-112.58-3.616-4.96-30.4-40.48-30.4-77.216s18.656-54.624 26.176-62.304c6.176-6.304 16.384-9.184 26.176-9.184 3.168 0 6.016 0.16 8.576 0.288 7.52 0.32 11.296 0.768 16.256 12.64 6.176 14.88 21.216 51.616 23.008 55.392 1.824 3.776 3.648 8.896 1.088 13.856-2.4 5.12-4.512 7.392-8.288 11.744s-7.36 7.68-11.136 12.352c-3.456 4.064-7.36 8.416-3.008 15.936 4.352 7.36 19.392 31.904 41.536 51.616 28.576 25.44 51.744 33.568 60.032 37.024 6.176 2.56 13.536 1.952 18.048-2.848 5.728-6.176 12.8-16.416 20-26.496 5.12-7.232 11.584-8.128 18.368-5.568 6.912 2.4 43.488 20.48 51.008 24.224 7.52 3.776 12.48 5.568 14.304 8.736 1.792 3.168 1.792 18.048-4.384 35.52z"
            fill="#FAFAFA"
          />
        </svg>
      </a>
      <Box
        id="home"
        sx={{
          width: '100%',
          height: { lg: '90vh' },
          display: { lg: 'flex', 'iphone-5-SE': 'none' },
        }}
      >
        <Splide
          options={{
            rewind: true,
            width: '100%',
            height: '90vh',
            gap: '1rem',
            autoplay: true,
          }}
        >
          <SplideSlide>
            <img
              src="home.png"
              alt="Image 1"
              width="100%"
              height="100%"
              loading="lazy"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="slide2.png"
              alt="Image 2"
              width="100%"
              height="100%"
              loading="lazy"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="slide3.png"
              alt="Image 1"
              width="100%"
              height="100%"
              loading="lazy"
            />
          </SplideSlide>
        </Splide>
      </Box>

      <Box
        sx={{
          width: '100%',
          height: { 'iphone-5-SE': '50%' },
          display: { lg: 'none' },
        }}
      >
        <Splide
          options={{
            rewind: true,
            width: '100%',
            // height: '90vh',
            gap: '1rem',
            autoplay: true,
          }}
        >
          <SplideSlide>
            <img
              src="home.png"
              alt="Image 1"
              width="100%"
              height="100%"
              loading="lazy"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="slide2.png"
              alt="Image 2"
              width="100%"
              height="100%"
              loading="lazy"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="slide3.png"
              alt="Image 1"
              width="100%"
              height="100%"
              loading="lazy"
            />
          </SplideSlide>
        </Splide>
      </Box>

      <Box
        sx={{
          height: '100%',
          backgroundImage: 'linear-gradient(to right, #095134, #168D63)',
          padding: { lg: '1.6rem', 'iphone-5-SE': '0.8rem' },
        }}
      >
        <Typography
          style={{
            fontSize: '1.4rem',
            textAlign: 'center',
            color: '#FFF',
            alignItems: 'center',
          }}
        >
          Temos proteções COVID-19 em nosso escritório, que incluem o uso de
          máscaras e verificações de temperatura.
        </Typography>
      </Box>

      <Box
        id="sobre"
        sx={{
          height: '90vh',
          padding: '0.8rem',
          backgroundColor: '#ECF0F1',
          backgroundImage: `url(/bgReto.png)`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          display: 'flex',
          flexDirection: { 'iphone-5-SE': 'column', lg: 'row' },
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        <Box
          sx={{
            paddingLeft: '2rem',
            paddingRight: '4rem',
          }}
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <Typography
            sx={{
              textAlign: 'right',
              color: '#168D63',
              fontSize: { 'iphone-5-SE': '2rem', lg: '2.4rem' },
              fontWeight: 'bold',
              paddingTop: '2rem',
              fontFamily: 'Oswald',
            }}
          >
            AMAZON LIDER
          </Typography>
          <Divider
            variant="inset"
            sx={{
              maxWidth: 560,
              backgroundColor: '#168D63',
              marginBottom: '1.2rem',
            }}
          />
          <Typography
            style={{
              fontSize: '1rem',
              fontWeight: 'lighter',
              color: '#747678',
              textAlign: 'right',
            }}
          >
            Morbi tempus felis turpis odio. Purus cras adipiscing eu ultrices
            lobortis. Proin consectetur risus fermentum facilisis nisl. Amet
            diam sed rhoncus ultricies. Elit eleifend at adipiscing donec.
            Faucibus arcu purus nascetur mauris cursus enim sagittis. In ante
            risus, sed in accumsan. Suspendisse et magna arcu, tortor, a.
          </Typography>
        </Box>

        <img
          data-aos="flip-left"
          data-aos-duration="1000"
          src="imagem3.png"
          alt="Onibus"
          style={{
            width: '50%',
            paddingTop: '2.4rem',
          }}
          loading="lazy"
        />
        <Typography
          data-aos="fade-down"
          data-aos-duration="1000"
          sx={{
            writingMode: 'vertical-rl',
            display: { 'iphone-5-SE': 'none', lg: 'flex' },
            color: '#9F9F9F',
            opacity: 0.3,
            fontWeight: 'ligther',
            fontSize: '5.6rem',
            pr: '4rem',
            pl: '4rem',
            fontFamily: 'Oswald',
          }}
        >
          QUEM SOMOS
        </Typography>
      </Box>

      <Box
        data-aos="zoom-in"
        data-aos-duration="1000"
        sx={{
          height: '100%',
          padding: { 'iphone-5-SE': '0.8rem', lg: '2rem' },
        }}
      >
        <Typography
          sx={{
            color: '#168D63',
            textTransform: 'uppercase',
            fontSize: { 'iphone-5-SE': '0.8rem', lg: '1.6rem' },
            textAlign: 'center',
            fontWeight: 'bold',
          }}
        >
          Trabalhando com o compromisso de atender e satisfazer cliente com o
          que há de melhor e mais inovador no mercado.
        </Typography>
      </Box>

      <Box
        sx={{
          height: { 'iphone-5-SE': '100%', lg: '100vh' },
          padding: { lg: '0.8rem', 'iphone-5-SE': 0 },
          backgroundColor: '#ECF0F1',
          backgroundImage: `url(/bg.png)`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          display: 'flex',
          flexDirection: { 'iphone-5-SE': 'column', lg: 'row' },
          alignItems: 'center',
          justifyContent: 'space-evenly',
          width: '100%',
        }}
      >
        <Box data-aos="fade-right" data-aos-duration="1000">
          <Typography
            sx={{
              writingMode: 'vertical-rl',
              display: { 'iphone-5-SE': 'none', lg: 'flex' },
              color: '#9F9F9F',
              opacity: 0.5,
              fontWeight: 'ligther',
              fontSize: '5.6rem',
              fontFamily: 'Oswald',
            }}
          >
            NOSSA FROTA
          </Typography>
        </Box>
        <Box
          sx={{
            display: { lg: 'flex', 'iphone-5-SE': 'none' },
            flexDirection: { lg: 'column', sm: 'row' },
            maxWidth: '400px',
            // justifyContent: 'space-between',
            // alignItems: 'center',
          }}
        >
          <img
            data-aos="zoom-out-up"
            data-aos-duration="1000"
            src="imagem5.png"
            alt="onibus"
            style={{
              width: '100%',
              marginBottom: '1.6rem',
              borderRadius: '10px',
              boxShadow: ' 5px 5px 32px 5px rgba(0,0,0,0.3)',
            }}
          />
          <img
            data-aos="zoom-out-up"
            data-aos-duration="1000"
            src="imagem3.png"
            alt="onibus"
            style={{
              width: '100%',
              marginBottom: '1.6rem',
              borderRadius: '10px',
              boxShadow: ' 5px 5px 32px 5px rgba(0,0,0,0.3)',
            }}
          />
          <img
            data-aos="zoom-out-up"
            data-aos-duration="1000"
            src="slide2.png"
            alt="onibus"
            style={{
              width: '100%',
              marginBottom: '1.6rem',
              borderRadius: '10px',
              boxShadow: ' 5px 5px 32px 5px rgba(0,0,0,0.3)',
            }}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            p: '4rem',
          }}
        >
          <Typography
            sx={{
              textAlign: 'left',
              color: '#168D63',
              fontSize: { lg: '2.4rem', 'iphone-5-SE': '1.8rem' },
              fontWeight: 'bold',
              paddingTop: '2rem',
              fontFamily: 'Oswald',
            }}
          >
            EXPERIÊNCIA INCRÍVEL
          </Typography>
          <Typography
            style={{
              textAlign: 'left',
              color: '#747678',
              fontSize: '1rem',
              fontWeight: 'lighter',
            }}
          >
            E INESQUECÍVEL
          </Typography>
          <Divider variant="fullWidth" />

          <div
            data-aos="flip-right"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <CardComponent />
          </div>
        </Box>
        <Box
          sx={{
            display: { lg: 'flex', 'iphone-5-SE': 'none' },
            flexDirection: { lg: 'column', sm: 'row' },
            maxWidth: '400px',
            // justifyContent: 'space-between',
            // alignItems: 'center',
          }}
        >
          <img
            data-aos="zoom-out-down"
            data-aos-duration="1000"
            src="imagem5.png"
            alt="onibus"
            style={{
              width: '100%',
              marginBottom: '1.6rem',
              borderRadius: '10px',
              boxShadow: ' 5px 5px 32px 5px rgba(0,0,0,0.3)',
            }}
          />
          <img
            data-aos="zoom-out-down"
            data-aos-duration="1000"
            src="imagem3.png"
            alt="onibus"
            style={{
              width: '100%',
              marginBottom: '1.6rem',
              borderRadius: '10px',
              boxShadow: ' 5px 5px 32px 5px rgba(0,0,0,0.3)',
            }}
          />
          <img
            data-aos="zoom-out-down"
            data-aos-duration="1000"
            src="slide2.png"
            alt="onibus"
            style={{
              width: '100%',
              marginBottom: '1.6rem',
              borderRadius: '10px',
              boxShadow: ' 5px 5px 32px 5px rgba(0,0,0,0.3)',
            }}
          />
        </Box>
      </Box>

      <Box
        id="servicos"
        sx={{
          height: { lg: '70vh', 'iphone-5-SE': '100%' },
          padding: '0.8rem',
          // backgroundColor: '#FFF',
          display: 'flex',
          flexDirection: { lg: 'row', 'iphone-5-SE': 'column' },
          justifyContent: 'space-around',
          alignItems: 'center',
          backgroundImage: `url(/bg_branco.png)`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <Box>
          <div></div>
        </Box>
        <Box>
          <Box data-aos="flip-right">
            <CardGreenComponent />
          </Box>
          <Box
            data-aos="fade-down"
            data-aos-duration="1000"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              paddingTop: '1.2rem',
              width: '100%',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '50%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <img
                  src="custo.png"
                  alt="onibus"
                  style={{ width: '30%' }}
                  loading="lazy"
                />
                <Typography
                  sx={{
                    color: '#168D63',
                    textTransform: 'uppercase',
                    textAlign: 'center',
                    paddingBottom: '1.2rem',
                    paddingTop: '1rem',
                    fontFamily: 'Roboto Condensed',
                    fontSize: { 'iphone-5-SE': '0.8rem', lg: '1.6rem' },
                  }}
                >
                  Custos Menores
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '50%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <img
                  src="capital.png"
                  alt="onibus"
                  style={{ width: '30%' }}
                  loading="lazy"
                />
                <Typography
                  sx={{
                    color: '#168D63',
                    textTransform: 'uppercase',
                    textAlign: 'center',
                    paddingBottom: '1.2rem',
                    paddingTop: '1rem',
                    fontFamily: 'Roboto Condensed',
                    fontSize: { 'iphone-5-SE': '0.8rem', lg: '1.6rem' },
                  }}
                >
                  capital movimentado
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '50%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <img
                  src="acompanhamento.png"
                  alt="onibus"
                  style={{ width: '30%' }}
                  loading="lazy"
                />
                <Typography
                  sx={{
                    fontFamily: 'Roboto Condensed',
                    fontSize: { 'iphone-5-SE': '0.8rem', lg: '1.6rem' },
                    color: '#168D63',
                    textTransform: 'uppercase',
                    textAlign: 'center',
                    paddingBottom: '1.2rem',
                    paddingTop: '1rem',
                  }}
                >
                  Acompanhamento em tempo real
                </Typography>
              </Box>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '50%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <img
                  src="orcamento.png"
                  alt="onibus"
                  style={{ width: '30%' }}
                  loading="lazy"
                />
                <Typography
                  sx={{
                    fontFamily: 'Roboto Condensed',
                    fontSize: { 'iphone-5-SE': '0.8rem', lg: '1.6rem' },
                    color: '#168D63',
                    textTransform: 'uppercase',
                    textAlign: 'center',
                    paddingBottom: '1.2rem',
                    paddingTop: '1rem',
                  }}
                >
                  Previsibilidade de orçamento
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '50%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <img
                  src="monitoramento.png"
                  alt="onibus"
                  style={{ width: '30%' }}
                  loading="lazy"
                />
                <Typography
                  sx={{
                    fontFamily: 'Roboto Condensed',
                    fontSize: { 'iphone-5-SE': '0.8rem', lg: '1.6rem' },
                    color: '#168D63',
                    textTransform: 'uppercase',
                    textAlign: 'center',
                    paddingBottom: '1.2rem',
                    paddingTop: '1rem',
                  }}
                >
                  Monitoramento
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '50%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <img
                  src="like.png"
                  alt="onibus"
                  style={{ width: '30%' }}
                  loading="lazy"
                />
                <Typography
                  sx={{
                    fontFamily: 'Roboto Condensed',
                    fontSize: { 'iphone-5-SE': '0.8rem', lg: '1.6rem' },
                    color: '#168D63',
                    textTransform: 'uppercase',
                    textAlign: 'center',
                    paddingBottom: '1.2rem',
                    paddingTop: '1rem',
                  }}
                >
                  Ótimo serviço
                </Typography>
              </Box>
            </div>
          </Box>
        </Box>

        <Box
          data-aos="fade-right"
          data-aos-duration="1000"
          sx={{ display: 'flex', alignSelf: 'center' }}
        >
          <Typography
            sx={{
              writingMode: 'vertical-rl',
              display: { 'iphone-5-SE': 'none', lg: 'flex' },
              color: '#9F9F9F',
              opacity: 0.5,
              fontWeight: 'ligther',
              fontSize: '5.6rem',
              fontFamily: 'Oswald',
            }}
          >
            SERVIÇOS
          </Typography>
        </Box>
      </Box>

      {/* <Box
        id="servicos"
        sx={{
          height: '100%',
          padding: '0.8rem',
          // backgroundColor: '#FFF',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundImage: `url(/bg_branco.png)`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <Box>
          <div></div>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardGreenComponent />
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              paddingTop: '1.2rem',
              width: '100%',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src="custo.png"
                alt="onibus"
                style={{ width: '30%' }}
                loading="lazy"
              />
              <Typography
                style={{
                  fontSize: '0.8rem',
                  color: '#168D63',
                  textTransform: 'uppercase',
                  textAlign: 'center',
                  paddingBottom: '1.2rem',
                  paddingTop: '1rem',
                }}
              >
                Custos Menores
              </Typography>
              <img
                src="capital.png"
                alt="onibus"
                style={{ width: '30%' }}
                loading="lazy"
              />
              <Typography
                style={{
                  fontSize: '0.8rem',
                  color: '#168D63',
                  textTransform: 'uppercase',
                  textAlign: 'center',
                  paddingBottom: '1.2rem',
                  paddingTop: '1rem',
                }}
              >
                capital movimentado
              </Typography>
              <img
                src="acompanhamento.png"
                alt="onibus"
                style={{ width: '30%' }}
                loading="lazy"
              />
              <Typography
                style={{
                  fontSize: '0.8rem',
                  color: '#168D63',
                  textTransform: 'uppercase',
                  textAlign: 'center',
                  paddingBottom: '1.2rem',
                  paddingTop: '1rem',
                }}
              >
                Acompanhamento em tempo real
              </Typography>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                paddingBottom: '1.2rem',
                paddingTop: '1rem',
              }}
            >
              <img
                src="orcamento.png"
                alt="onibus"
                style={{ width: '30%' }}
                loading="lazy"
              />
              <Typography
                style={{
                  fontSize: '0.8rem',
                  color: '#168D63',
                  textTransform: 'uppercase',
                  textAlign: 'center',
                  paddingBottom: '1.2rem',
                  paddingTop: '1rem',
                }}
              >
                Previsibilidade de orçamento
              </Typography>
              <img
                src="monitoramento.png"
                alt="onibus"
                style={{ width: '30%' }}
                loading="lazy"
              />
              <Typography
                style={{
                  fontSize: '0.8rem',
                  color: '#168D63',
                  textTransform: 'uppercase',
                  textAlign: 'center',
                  paddingBottom: '1.2rem',
                  paddingTop: '1rem',
                }}
              >
                Monitoramento
              </Typography>
              <img
                src="like.png"
                alt="onibus"
                style={{ width: '30%' }}
                loading="lazy"
              />
              <Typography
                style={{
                  fontSize: '0.8rem',
                  color: '#168D63',
                  textTransform: 'uppercase',
                  textAlign: 'center',
                  paddingBottom: '1.2rem',
                  paddingTop: '1rem',
                }}
              >
                Ótimo serviço
              </Typography>
            </div>
          </div>
        </Box>

        <Box
          sx={{
            display: { 'iphone-5-SE': 'none', lg: 'flex' },
            // paddingRight: '8rem',
            // alignItems: 'center',
          }}
        >
          <Typography
            sx={{
              // paddingRight: '5.6rem',
              // paddingLeft: '1rem',
              transform: `rotate(90deg)`,
              display: { 'iphone-5-SE': 'none', lg: 'flex' },
              color: '#9F9F9F',
              opacity: 0.5,
              fontWeight: 'bold',
              fontSize: '4rem',
              // textAlign: 'center',
            }}
          >
            SERVIÇOS
          </Typography>
        </Box>
      </Box> */}

      {/* <Box
        data-aos="zoom-in-down"
        data-aos-duration="1000"
        id="historia"
        sx={{
          height: { lg: '70vh', 'iphone-5-SE': '100%' },
          padding: '0.8rem',
          backgroundColor: '#ECF0F1',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: `url(/bg.png)`,
          backgroundRepeat: 'no-repeat',
          // width: "100%",
          backgroundSize: 'cover',
        }}
      >
        <CardWithImageComponent />
      </Box> */}

      <Box sx={{ height: { 'iphone-5-SE': '50vh', lg: '80vh' } }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1992.0861817976404!2d-59.978129!3d-3.048464!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xab2fbbd0fc087e32!2sAuto%20onibus%20lider!5e0!3m2!1spt-BR!2sbr!4v1640270546881!5m2!1spt-BR!2sbr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
        />
      </Box>

      <Box
        id="trabalhe"
        sx={{
          height: '100%',
          padding: '0.8rem',
          backgroundColor: '#ECF0F1',
          display: 'flex',
          flexDirection: { 'iphone-5-SE': 'column', lg: 'row' },
          justifyContent: { lg: 'space-between' },
        }}
      >
        <Box
          data-aos="fade-up"
          data-aos-duration="1000"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignSelf: 'center',
            p: { lg: '5.6rem', 'iphone-5-SE': 0 },
          }}
        >
          <Typography
            sx={{
              color: '#168D63',
              fontSize: { lg: '2.4rem', 'iphone-5-SE': '2rem' },
              fontWeight: 'bold',
              textAlign: 'left',
              fontFamily: 'Oswald',
            }}
          >
            TRABALHE CONOSCO
          </Typography>
          <Divider
            variant="fullWidth"
            sx={{
              maxWidth: 560,
              backgroundColor: '#168D63',
              marginBottom: '1.2rem',
            }}
          />
          <Typography style={{ fontSize: '1rem', color: '#767478' }}>
            Envie seu curriculum para nosso setor de RH para analise. Assim que
            tivermos vaga disponível entraremos em contato.
          </Typography>
        </Box>

        <Box
          data-aos="fade-down"
          data-aos-duration="1000"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            p: { lg: '4rem', 'iphone-5-SE': 0 },
          }}
        >
          <form
            action="https://formspree.io/f/xvodyjob"
            method="POST"
            // encType="multipart/form-data"
          >
            <Input
              // label="Nome Completo"
              // variant="outlined"
              placeholder="Digite seu nome completo"
              name="Nome completo:"
              fullWidth
              sx={{
                marginBottom: '1.2rem',
                marginTop: '1.2rem',
                fontSize: '1.2rem',
              }}
            />
            <Input
              // label="Seu email:"
              // variant="outlined"
              placeholder="Digite seu email"
              fullWidth
              name="Email"
              type="email"
              sx={{ marginBottom: '1.2rem', fontSize: '1.2rem' }}
            />
            <Input
              name="Fale um pouco sobre você"
              // label="Fale um pouco sobre você"
              placeholder="Fale um pouco sobre você"
              fullWidth
              multiline
              rows={4}
              sx={{ marginBottom: '1.2rem', fontSize: '1.2rem' }}
            />
            <label style={{ fontSize: '1.2rem' }}>
              Envie seu currículo
              <input type="file" name="Currículo" />
            </label>
            <Button
              type="submit"
              sx={{
                width: '100%',
                backgroundColor: '#168D63',
                color: '#FFFFFF',
                marginTop: '1.2rem',
              }}
            >
              Enviar
            </Button>
          </form>
          {/* <Form /> */}
        </Box>
      </Box>
    </>
  );
};

export default Home;
