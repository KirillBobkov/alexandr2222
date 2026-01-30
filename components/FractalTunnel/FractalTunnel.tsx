import React from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js'
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js'
import { FXAAShader } from 'three/addons/shaders/FXAAShader.js'
import { AfterimagePass } from 'three/addons/postprocessing/AfterimagePass.js'
import styles from './FractalTunnel.module.css'

const noiseFunctions = `
  vec3 mod289(vec3 x){return x - floor(x*(1.0/289.0))*289.0;}
  vec4 mod289(vec4 x){return x - floor(x*(1.0/289.0))*289.0;}
  vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}
  vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
  float snoise(vec3 v){
    const vec2 C=vec2(1.0/6.0,1.0/3.0);
    const vec4 D=vec4(0.0,0.5,1.0,2.0);
    vec3 i=floor(v+dot(v,C.yyy));
    vec3 x0=v-i+dot(i,C.xxx);
    vec3 g=step(x0.yzx,x0.xyz);
    vec3 l=1.0-g;
    vec3 i1=min(g.xyz,l.zxy);
    vec3 i2=max(g.xyz,l.zxy);
    vec3 x1=x0-i1+C.xxx;
    vec3 x2=x0-i2+C.yyy;
    vec3 x3=x0-D.yyy;
    i=mod289(i);
    vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));
    float n_=0.142857142857;
    vec3 ns=n_*D.wyz-D.xzx;
    vec4 j=p-49.0*floor(p*ns.z*ns.z);
    vec4 x_=floor(j*ns.z);
    vec4 y_=floor(j-7.0*x_);
    vec4 x=x_*ns.x+ns.yyyy;
    vec4 y=y_*ns.x+ns.yyyy;
    vec4 h=1.0-abs(x)-abs(y);
    vec4 b0=vec4(x.xy,y.xy); vec4 b1=vec4(x.zw,y.zw);
    vec4 s0=floor(b0)*2.0+1.0; vec4 s1=floor(b1)*2.0+1.0;
    vec4 sh=-step(h,vec4(0.0));
    vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy; vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
    vec3 p0=vec3(a0.xy,h.x); vec3 p1=vec3(a0.zw,h.y); vec3 p2=vec3(a1.xy,h.z); vec3 p3=vec3(a1.zw,h.w);
    vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
    p0*=norm.x; p1*=norm.y; p2*=norm.z; p3*=norm.w;
    vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);
    m=m*m;
    return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
  }
`

const FractalTunnel = () => {
  const containerRef = React.useRef<HTMLDivElement | null>(null)
  const frameRef = React.useRef<number | null>(null)

  React.useLayoutEffect(() => {
    const container = containerRef.current
    if (!container) return

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance',
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setClearColor(0x000000, 1)
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.08
    container.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      70,
      container.clientWidth / container.clientHeight,
      0.1,
      3000
    )
    camera.position.set(0, 7, 40)

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.minDistance = 10
    controls.maxDistance = 260

    const baseColor = new THREE.Color('#edac34')
    const COLORS = {
      core: baseColor,
      shell: baseColor,
      diskA: baseColor,
      diskB: baseColor,
      ring: baseColor,
      emberA: baseColor,
      emberB: baseColor,
      prominence: baseColor,
    }

    const coreGroup = new THREE.Group()
    scene.add(coreGroup)

    const starGeometry = new THREE.IcosahedronGeometry(4, 5)
    const starMaterial = new THREE.ShaderMaterial({
      uniforms: { time: { value: 0 }, uCore: { value: COLORS.core } },
      vertexShader: `
        uniform float time;
        varying vec3 vN;
        ${noiseFunctions}
        void main(){
          vN = normalize(normal);
          float displacement = snoise(normal * 3.0 + time * 0.7) * 0.2;
          vec3 newPosition = position + normal * displacement;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time; 
        uniform vec3 uCore; 
        varying vec3 vN;
        ${noiseFunctions}
        void main(){
          float pulse = pow(0.5 + 0.5*sin(time*2.15), 1.7);
          float fres = pow(1.0 - abs(dot(vN, vec3(0,0,1))), 3.0);
          float surfaceNoise = snoise(vN * 8.0 + time * 1.2);
          vec3 col = uCore * (0.55 + 2.3*fres) * (0.5 + 1.2*pulse) * (1.0 + 0.3 * surfaceNoise);
          gl_FragColor = vec4(col, 1.0);
        }
      `,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
    coreGroup.add(new THREE.Mesh(starGeometry, starMaterial))

    const shellGeometry = new THREE.IcosahedronGeometry(8, 5)
    const shellMaterial = new THREE.ShaderMaterial({
      uniforms: { time: { value: 0 }, uShell: { value: COLORS.shell } },
      vertexShader: `
        uniform float time;
        varying vec3 vN; 
        varying vec2 vUv;
        ${noiseFunctions}
        void main(){ 
          vN = normalize(normal); 
          vUv = uv; 
          float displacement = snoise(position * 1.5 + time * 0.4) * 0.8;
          vec3 newPosition = position + normal * displacement;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition,1.0); 
        }
      `,
      fragmentShader: `
        uniform float time; 
        uniform vec3 uShell; 
        varying vec3 vN; 
        varying vec2 vUv;
        ${noiseFunctions}
        void main(){
          float fres = pow(1.0 - abs(dot(vN, vec3(0,0,1))), 0.6);
          float n = snoise(vec3(vUv*7.0 + vec2(time*0.22, 0.0), time*0.25));
          float fil = smoothstep(0.55, 0.82, n) * pow(abs(vUv.y*2.0 - 1.0), 14.0);
          vec3 color = uShell * (0.08 + 1.7*fil + 0.6*fres);
          float alpha = clamp(0.06 + 0.5*fres + 0.55*fil, 0.0, 0.9);
          gl_FragColor = vec4(color, alpha);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
    coreGroup.add(new THREE.Mesh(shellGeometry, shellMaterial))

    const ringGeom = new THREE.TorusGeometry(60, 2, 4, 128)
    const ringMat = new THREE.ShaderMaterial({
      uniforms: { time: { value: 0 }, uRing: { value: COLORS.ring } },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time; 
        uniform vec3 uRing; 
        varying vec2 vUv;
        ${noiseFunctions}
        void main() {
          float n1 = snoise(vec3(vUv.x * 8.0 - time * 0.1, vUv.y * 2.0, time * 0.15));
          float n2 = snoise(vec3(vUv.x * 6.0 + time * 0.05, vUv.y * 3.0, time * 0.1));
          float combinedNoise = smoothstep(0.3, 0.7, n1) * 0.6 + smoothstep(0.4, 0.6, n2) * 0.4;
          float opacity = pow(combinedNoise, 2.0) * 0.8;
          gl_FragColor = vec4(uRing * (0.5 + combinedNoise * 1.5), opacity);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide,
    })
    const ring1 = new THREE.Mesh(ringGeom, ringMat)
    ring1.rotation.x = Math.PI * 0.51
    scene.add(ring1)
    const ring2 = ring1.clone()
    ring2.scale.set(0.8, 0.8, 0.8)
    ring2.rotation.y = Math.PI * 0.1
    scene.add(ring2)

    const particleCount = 30000
    const diskPositions = new Float32Array(particleCount * 3)
    const diskSeeds = new Float32Array(particleCount)
    const diskBands = new Float32Array(particleCount)
    for (let i = 0; i < particleCount; i += 1) {
      const r = 10 + Math.random() * 35
      const theta = Math.random() * Math.PI * 2
      diskPositions[i * 3] = Math.cos(theta) * r
      diskPositions[i * 3 + 1] = (Math.random() - 0.5) * 4.0
      diskPositions[i * 3 + 2] = Math.sin(theta) * r
      diskSeeds[i] = Math.random() * 1000.0
      diskBands[i] = (r - 10.0) / 35.0
    }
    const diskGeom = new THREE.BufferGeometry()
    diskGeom.setAttribute('position', new THREE.BufferAttribute(diskPositions, 3))
    diskGeom.setAttribute('aSeed', new THREE.BufferAttribute(diskSeeds, 1))
    diskGeom.setAttribute('aBand', new THREE.BufferAttribute(diskBands, 1))
    const diskMat = new THREE.ShaderMaterial({
      uniforms: {
        uColorA: { value: COLORS.diskA },
        uColorB: { value: COLORS.diskB },
        time: { value: 0 },
      },
      vertexShader: `
        uniform float time; 
        attribute float aSeed; 
        attribute float aBand;
        varying float vMix; 
        varying float vAlpha;
        vec2 rot(vec2 p, float a){ float c=cos(a), s=sin(a); return vec2(c*p.x - s*p.y, s*p.x + c*p.y); }
        void main(){
          vec3 p = position;
          float r = length(p.xz);
          float speed = (14.5 / max(16.0, r*r));
          float angle = -time * speed;
          vec2 xz = rot(p.xz, angle);
          float breathe = 1.0 + 0.011*sin(time*0.8 + aSeed);
          p.xz = xz * breathe;
          p.y *= (1.0 + 0.2*sin(time*1.4 + aSeed*2.0 + r*0.2));
          vec4 mvp = modelViewMatrix * vec4(p, 1.0);
          gl_Position = projectionMatrix * mvp;
          gl_PointSize = (45.0 / -mvp.z) * (1.0 - aBand);
          vMix = aBand;
          vAlpha = 0.4 + 0.4 * sin(time*3.0 + aSeed);
        }
      `,
      fragmentShader: `
        uniform vec3 uColorA; 
        uniform vec3 uColorB; 
        varying float vMix; 
        varying float vAlpha;
        void main(){
          if (length(gl_PointCoord - vec2(0.5)) > 0.5) discard;
          vec3 col = mix(uColorA, uColorB, vMix);
          gl_FragColor = vec4(col, vAlpha);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
    scene.add(new THREE.Points(diskGeom, diskMat))

    const emberCount = 5000
    const emberPos = new Float32Array(emberCount * 3)
    const emberSeeds = new Float32Array(emberCount * 4)
    for (let i = 0; i < emberCount; i += 1) {
      emberPos.set([0, 0, 0], i * 3)
      emberSeeds.set(
        [Math.random(), 0.1 + Math.random() * 0.9, Math.random() * 10, 0.5 + Math.random()],
        i * 4
      )
    }
    const emberGeom = new THREE.BufferGeometry()
    emberGeom.setAttribute('position', new THREE.BufferAttribute(emberPos, 3))
    emberGeom.setAttribute('aSeed', new THREE.BufferAttribute(emberSeeds, 4))
    const emberMat = new THREE.ShaderMaterial({
      uniforms: {
        uEmberA: { value: COLORS.emberA },
        uEmberB: { value: COLORS.emberB },
        time: { value: 0 },
      },
      vertexShader: `
        uniform float time; 
        attribute vec4 aSeed; 
        varying float vLife;
        void main() {
          float life = mod(time * aSeed.y * 0.3 + aSeed.x, 1.0);
          vec3 p = normalize(vec3(
            sin(aSeed.z * 1.2),
            cos(aSeed.z * 1.7),
            sin(aSeed.z * 1.1)
          )) * (8.0 + life * 40.0);
          vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
          gl_PointSize = (100.0 / -mvPosition.z) * (1.0 - life) * aSeed.w;
          gl_Position = projectionMatrix * mvPosition;
          vLife = life;
        }
      `,
      fragmentShader: `
        uniform vec3 uEmberA; 
        uniform vec3 uEmberB; 
        varying float vLife;
        void main() {
          if (length(gl_PointCoord - vec2(0.5)) > 0.5) discard;
          float opacity = pow(1.0 - vLife, 2.0);
          vec3 col = mix(uEmberA, uEmberB, vLife);
          gl_FragColor = vec4(col, opacity);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
    scene.add(new THREE.Points(emberGeom, emberMat))

    const prominenceCount = 1000
    const prominencePos = new Float32Array(prominenceCount * 3)
    const prominenceSeeds = new Float32Array(prominenceCount * 4)
    for (let i = 0; i < prominenceCount; i += 1) {
      prominencePos.set([0, 0, 0], i * 3)
      prominenceSeeds.set(
        [
          Math.random(),
          0.1 + Math.random() * 0.4,
          5.0 + Math.random() * 15.0,
          0.5 + Math.random() * 1.5,
        ],
        i * 4
      )
    }
    const prominenceGeom = new THREE.BufferGeometry()
    prominenceGeom.setAttribute('position', new THREE.BufferAttribute(prominencePos, 3))
    prominenceGeom.setAttribute('aSeed', new THREE.BufferAttribute(prominenceSeeds, 4))
    const prominenceMat = new THREE.ShaderMaterial({
      uniforms: { uColor: { value: COLORS.prominence }, time: { value: 0 } },
      vertexShader: `
        uniform float time;
        attribute vec4 aSeed;
        varying float vLife;

        vec4 quat_from_axis_angle(vec3 axis, float angle) {
          vec4 qr;
          float half_angle = (angle * 0.5);
          qr.x = axis.x * sin(half_angle);
          qr.y = axis.y * sin(half_angle);
          qr.z = axis.z * sin(half_angle);
          qr.w = cos(half_angle);
          return qr;
        }

        vec3 rotate_vertex_position(vec3 position, vec4 q) {
          return position + 2.0 * cross(q.xyz, cross(q.xyz, position) + q.w * position);
        }

        void main() {
          float life = mod(time * aSeed.y + aSeed.x, 1.0);
          vLife = life;
          float arc = sin(life * 3.14159);
          vec3 p = vec3(0.0, 0.0, 0.0);
          p.y = arc * aSeed.z;
          p.x = (life - 0.5) * 16.0;
          vec3 axis = normalize(vec3(aSeed.x - 0.5, aSeed.y - 0.5, aSeed.z - 0.5));
          float angle = aSeed.x * 6.28318;
          vec4 q = quat_from_axis_angle(axis, angle);
          p = rotate_vertex_position(p, q);
          p += normalize(p) * 8.0;
          vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
          gl_PointSize = (150.0 / -mvPosition.z) * arc * (1.0 - life) * aSeed.w;
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform vec3 uColor;
        varying float vLife;
        void main() {
          if (length(gl_PointCoord - vec2(0.5)) > 0.5) discard;
          float opacity = pow(sin(vLife * 3.14159), 1.5) * 0.8;
          gl_FragColor = vec4(uColor, opacity);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
    coreGroup.add(new THREE.Points(prominenceGeom, prominenceMat))

    const starCount = 2400
    const starPositions = new Float32Array(starCount * 3)
    for (let i = 0; i < starCount; i += 1) {
      const r = THREE.MathUtils.randFloat(250, 1000)
      const th = Math.random() * Math.PI * 2
      const ph = Math.acos(THREE.MathUtils.randFloatSpread(2))
      starPositions[i * 3] = r * Math.sin(ph) * Math.cos(th)
      starPositions[i * 3 + 1] = r * Math.cos(ph)
      starPositions[i * 3 + 2] = r * Math.sin(ph) * Math.sin(th)
    }
    const starGeom = new THREE.BufferGeometry()
    starGeom.setAttribute('position', new THREE.BufferAttribute(starPositions, 3))
    const starMat = new THREE.PointsMaterial({
      color: 0xedb834,
      size: 0.8,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.5,
      depthWrite: false,
    })
    scene.add(new THREE.Points(starGeom, starMat))

    const composer = new EffectComposer(renderer)
    composer.addPass(new RenderPass(scene, camera))
    composer.addPass(new AfterimagePass(0.92))
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(container.clientWidth, container.clientHeight),
      1.2,
      0.8,
      0.05
    )
    composer.addPass(bloomPass)
    const fxaaPass = new ShaderPass(FXAAShader)
    const fxaaMaterial = fxaaPass.material as THREE.ShaderMaterial
    const updateFxaa = () => {
      const dpr = renderer.getPixelRatio()
      fxaaMaterial.uniforms.resolution.value.x = 1 / (container.clientWidth * dpr)
      fxaaMaterial.uniforms.resolution.value.y = 1 / (container.clientHeight * dpr)
    }
    updateFxaa()
    composer.addPass(fxaaPass)

    const clock = new THREE.Clock()
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate)
      const delta = clock.getDelta() / 3
      const time = clock.getElapsedTime() / 3
      starMaterial.uniforms.time.value = time
      shellMaterial.uniforms.time.value = time
      diskMat.uniforms.time.value = time
      emberMat.uniforms.time.value = time
      ringMat.uniforms.time.value = time
      prominenceMat.uniforms.time.value = time

      const pulse = 0.5 + 0.5 * Math.sin(time * 2.15)
      bloomPass.strength = 0.8 + 0.4 * pulse

      coreGroup.rotation.y += delta * 0.05
      controls.update()
      composer.render()
    }

    const handleResize = () => {
      const width = container.clientWidth || 1
      const height = container.clientHeight || 1
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
      renderer.setSize(width, height, false)
      composer.setSize(width, height)
      updateFxaa()
    }

    handleResize()
    const resizeObserver = new ResizeObserver(handleResize)
    resizeObserver.observe(container)
    frameRef.current = requestAnimationFrame(animate)

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
      resizeObserver.disconnect()
      controls.dispose()
      starGeometry.dispose()
      shellGeometry.dispose()
      ringGeom.dispose()
      diskGeom.dispose()
      emberGeom.dispose()
      prominenceGeom.dispose()
      starGeom.dispose()
      starMat.dispose()
      starMaterial.dispose()
      shellMaterial.dispose()
      ringMat.dispose()
      diskMat.dispose()
      emberMat.dispose()
      prominenceMat.dispose()
      renderer.dispose()
      if (renderer.domElement.parentElement) {
        renderer.domElement.parentElement.removeChild(renderer.domElement)
      }
    }
  }, [])

  return <div ref={containerRef} className={styles.threeContainer} />
}

export default FractalTunnel
